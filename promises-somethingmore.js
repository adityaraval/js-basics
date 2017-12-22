let a = 1;
let b = 1;


let doSum = (a,b)=>{
    
        return new Promise((resolve,reject)=>{
            if(a+b==2){
            let sum = {"sum":a+b};
            resolve(sum);
            }else{
            let reason = new Error('Wrong False');
            reject(reason);
            }
        });
}

let doSquare = (sumObj)=>{
        return new Promise((resolve,reject)=>{
            let sqr = {"square":sumObj.sum*sumObj.sum};
            resolve(sqr);
        });
}


doSum(a,b).then(doSquare).then((fulfilled)=>{
    console.log(fulfilled);
}).catch((error)=>{
    console.log(error)
});

/*
doSum(a,b).then(doSquare).then((fulfilled)=>{
    console.log(doSquare);
}).catch((error)=>{
    console.log(error)
});
*/

/*
doSum(a,b).then((fulfilled)=>{
    console.log(fulfilled);  
}).catch((error)=>{
    console.log(error)
});
*/