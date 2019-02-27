let promise1 = new Promise((resolve,reject)=>{
    if(true){
        resolve('promise1');
    }
    else{
        reject('I am error of Promise1');
    }
});

let promise2 = new Promise((resolve,reject)=>{
    if(true){
        resolve('promise2');
    }
    else{
        reject('I am error of Promise2');
    }
});

//Only if both promises are resolved, data is displayed, otherwise if even one of them is an error, err message displayed.
Promise.all([promise1, promise2]).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

// promise.then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// });

console.log('I am the first');

