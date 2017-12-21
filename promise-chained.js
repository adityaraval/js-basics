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

let showCheckedBooleanPromise = (showData)=>{
    return new Promise((resolve,reject)=>{
        let showObj = {showDataMessage:'Hey data is '+showData.isBoolean}
        resolve(showObj);
    });
}


// shorten it
var showCheckedBooleanPromise1 =  (showData) => {
     let showObj = {showDataMessage:'Hey data is '+showData.isBoolean}
     return Promise.resolve(showObj);
};


let AskBool = ()=>{
    makeCheckBooleanPromise
        .then(showCheckedBooleanPromise1)
        .then((fulfilled)=>{
            console.log(fulfilled);
        }).catch((error)=>{
            console.log(error);
        });
}


AskBool();