let fname=document.getElementsByName('fname');
let lname=document.getElementsByName('lname');
 
function Edit(id){
  console.log(id)
   let ids=document.getElementsByClassName(id);
   console.log(ids);
for(let i=0;i<ids.length; i++)
    {
     fname.value=ids[i].value;
     console.log(ids[i].fname);
     console.log(ids[i].value)
}
}

function Delete(id){

}

