// var name="vamcy";
// var age=20;

// if(age>18){
//     let name="vsmcy a";
//     let name="teja";
//     console.log(name);
// }
// console.log(name);

//objects

// let employee={
//     name:"chaithu",
//     designation:"junior software developer",
//     salary:"12.5LPA",
//     mobile:8328140790
// }
// console.log(employee.name)

//Array

// let employee=["syam","raju","ranger"]
// console.log(employee[1])


//Alerts

// alert(" registration is completed sucessfully")
// let number1=prompt("enter number1")
// console.log(number1)
// confirm("are u sure??")

//console statement

//spread operator

// let external_marks=[1,3,4,5,3]
// let internal_marks=[6,3,8,4,5]

// rest parameter

// function addition(x,y,...remainData){
//     console.log(x)
//     console.log(y)
//     console.log(remainData)
//     console.log(typeof(remainData))
// }
// console.log(addition(2,3,45,3,45,67,45,"chai"))


//Destructuring of Array


// )let employees=["chai","chote","bhade"]
// let name1=employees[0];
// let name2=employees[1]
// console.log(name1)
// console.log(name2

// let employee={
//     name:"chaithu",
//     designation:"junior software developer",
//     salary:"12.5LPA",
//     mobile:8328140790
// }

// let{name,salary,...remaindata}=employee;
// console.log(name)
// console.log(remaindata)

//functions

// let demo=function(x,y)
// {
//     return x+y
// }
// console.log(demo(3,4))

// setTimeout(function(){
//     console.log("welcome")
//  },5000)

//arrow function

// demo= (x,y) => {
//     return x*y
// }
// console.log(demo(4,5))

 let employees=["chai","chote","bhade","pillu"]

// // for( let i=0;i<employees.length;i++){

// for( let i in employees)
// console.log(i)

// let result=employees.map(function(element,index){
//     return element+"k"+index
// })
employees.forEach(function(element,index){
    console.log(element+" ok")
})
console.log(employees)
 //console.log(result)
