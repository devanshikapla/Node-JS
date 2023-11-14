const url = require('url');
const myurl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized URL 

console.log(myurl.href);
console.log(myurl.toString());

// Host(root domain)

console.log(myurl.host);

//Host name (does not get ports);
console.log(myurl.hostname);

//Pathname

console.log(myurl.pathname);

//Serialized query

console.log(myurl.search);

//Params object

console.log(myurl.searchParams);

//Add params

myurl.searchParams.append('abc', '123');

console.log(myurl.searchParams);

//loop through params
myurl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));


