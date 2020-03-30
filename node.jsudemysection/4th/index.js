//asynnchronous
// console.log("Before");
// const user=getUser(1, (user)=>{
//      console.log('User',user)
//     getRepositories(user.gitHubUserName,(repos)=>{
//    console.log('Repos',repos);
//  getCommits(repo,(commit)=>{
//  //callback hell
//  });
//     })
// });
//console.log(user);


//to solve callback hell
console.log("Before");
getUser(1,getRepositories);
console.log("after");


function getRepositories(user)
{
    getRepositories(user.gitHubUserName,getCommits )
}
function displayCommits(commits){
    console.log(commits);
   
}

function getCommits(repo){
     getCommits(repo,displayCommits)
}


//Synchronous
// console.log("before");
// const user=getUser(1);
// const repos=getRepositories(users.gitHubUserName);
//const commits=getCommits(repos[0]);
// console.log('After');



function getUser(id,callback){
    setTimeout(()=>{
        console.log("reading user data from database...");
        callback({id:id,gitHubUserName:"seenam"});
    },2000);
    
    //return {id:id,gitHubUserName:"seenam"}
}


function getRepositories(username,callback){
    setTimeout(()=>{
console.log("calling github API...");
callback(['repo1','repo2','repo3']);
    },2000);


}