let proOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('promise 1: see you after 2 sec...'); 
    }, 2000)
});
//-----------------------------------------------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000);
}).then(()=>{
    console.log('task 2 resolved');
}).catch(()=>{
   console.log("error");
});
//-----------------------------------------------------------

const proThree = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve({username: 'nishant', email: 'nishu@google.com'})
    }, 1000)
});

proThree.then((user)=>{
    console.log(user.email);
    console.log('promise 3');
    
});
//-----------------------------------------------------------

const proFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'john', pass: '1234'})
        }else{
            reject('Error: something went wrong.')
        }
    }, 500)
});

proFour.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("promise 4 resolved")
});
//-----------------------------------------------------------

async function consumeProFour(){
    try{
        let data = await proFour
        console.log(data);
        console.log(data.username);
    }catch(error){
        console.log(error);
    }
}
consumeProFour()
//-----------------------------------------------------------

// fetch("https://api.git-hub.com/users/")
// .then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
// }).catch((err)=>{
//     console.log('something went wrong', err.message)
// })
//-----------------------------------------------------------

async function getData() {
    const url = "https://api.git-hub.com/users/";
    try{
        let response = await fetch(url)
        if(!response.ok){
            throw new Error("error finding data");
        }
        let data = await response.json()
        console.log(data);
    }catch(error){
        console.error('Error', error.message);
    }
}

getData();