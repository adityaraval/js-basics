// standard promise defination

/**
promise syntax look like this
new Promise(function (resolve, reject) { ... } );
*/

let isBoolean = true;



let makeCheckBooleanPromise = new Promise((resolve,reject)=>{
    if(isBoolean){
        let boolObj = {isBoolean:true}
        resolve(boolObj);
    }else{
        let reason = new Error('isBoolean False');
        reject(reason);
    }
});


let AskBool = ()=>{
    makeCheckBooleanPromise.then((fulfilled)=>{
        console.log(fulfilled);
    }).catch((error)=>{
        console.log(error);
    });
}


AskBool();