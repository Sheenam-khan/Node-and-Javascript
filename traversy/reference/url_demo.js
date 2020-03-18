const url=require('url');
const myUrl=new URL('http://127.0.0.1:5500/hello.html/?id=100');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//host (Root domain)
console.log(myUrl.host);

//Hostname -doesn't include the port no.
console.log(myUrl.hostname);

//path name
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//Params Object
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append('abc',123);
console.log(myUrl.searchParams);

//loop throuugh params
myUrl.searchParams.forEach((name,value)=>console.log(`${value} ${name}`))
