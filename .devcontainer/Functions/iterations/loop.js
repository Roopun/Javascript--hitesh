//for
for(let index =0;index<=10;index++){
    const element =index;
    console.log(element);
}
//while
let index =0;
while(index<=10){
    console.log(`Value of index is ${index}`);
    index+=2;
}
// for of
const arr= [1,2,3,4,5];
for(const num of arr){
    console.log(num);
}
//Maps

const map = new Map();
map.set('IN',"India");
map.set('USA',"America");
map.set('AUS',"Australia");

for(const[key,Value] of map){
    console.log(key+":-"+Value);
}

//for in
const myobj ={
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby'
}
for(const key in myobj){
    console.log(myobj[key])
}

//for each 
const coding= ["js","c","c++","Kotlin"];
coding.forEach(function (element){
    console.log(element);
})

function printme(item){
    console.log(item);
}
coding.forEach(printme);

const mycoding =[
    {
        lang:"javascript",
        langfile:"js"
    },
    {
        lang:"java",
        langfile:"java"
    },
    {
        lang:"python",
        langfile:"py"
    }
]
mycoding.forEach((Value) =>{
    console.log(Value.lang);
})