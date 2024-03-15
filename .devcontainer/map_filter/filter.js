// filter
const nums =[2,5,1,6,9];
const newnums = nums.filter((num) =>{
    return num >=4;

})
console.log(newnums)
// map
const numbers =[2,5,1,6,9];
let add = numbers.map((num) => num+10);
console.log(add);
// Chaining
const mynum =[2,5,1,6,10,6];
add = mynum.map((num) => num*2).filter((num) => num >= 12)
console.log(add)