const regularUser= {
    email: "abc@.com",
    fullname:{
        Userfullname:{
            firstname: "Roopun",
            lastname: "Chatterjee"
        }
    }
}
console.log(regularUser.fullname.Userfullname.firstname);

const obj1 = {1:"a" , 2:"b"};
const obj2 = {3:"c" , 4:"d"};
const obj3 = {...obj1,...obj2};
console.log(obj3);