const p1=new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('async operation1...');
        resolve(1);
   //reject(new Error('error arise'));
    },2000);
});


const p2=new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('async operation2...')
   resolve(2);
    },2000);
});


//if any one of promise rejected then final promise from Promise.all is considered rejected
// Promise.all([p1,p2])
// .then(result=>console.log(result))
// .catch(err=>console.log(err.message));


//Promise.race-u don't want to complete all of them to complete
//if u want to do as one of  asynchronous operation complete firstly the
//if one of the  promise is fulfilled then final promise is considered fulfilled

Promise.race([p1,p2])
.then(result=>console.log(result))
.catch(err=>console.log(err.message));


