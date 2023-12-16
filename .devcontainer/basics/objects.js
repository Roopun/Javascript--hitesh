const mySym = Symbol("key1");
const jsUser ={
    name: "Hitesh",
    age:18,
    email: "abc@gmail.com",
    [mySym]:"mykey"
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js");
}
jsUser.greeting2 = function(){
    console.log(`Hello js, ${this.name}`);
}
console.log(jsUser.greeting2());