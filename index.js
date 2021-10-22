// UNDERSTAND THIS KEYWORD (Used every where)



// Watch this video to understand this keyword



// https://www.youtube.com/watch?v=NV9sHLX-jZU



// Deliverables

// What are the different type of usage of this as shown by the youtuber. List all of them
// After listing all of them write a small code snippet for everyone of them and paste the code here.
// Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.
// Write a function to check whether the student is egligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
// Create 5 students with different names and age.
// Write a function which keep track of the number of students created. Have you heard of static variables. Leverage that now. Check Hints 1 if you are stuck.


// Attention: static variable might not work in your online editors. Use VScode only.











// FAT ARROW FUNCTIONS



// Go through this video to understand fat arrow functions in depth



// https://www.youtube.com/watch?v=_pfXEv9cFGE



// Deliverables

// Write the code which the youtuber writes by yourself and upload it here
// Take the student class which you made up and write a function called egligible for placements 
// which basically takes the minimum board marks required by a candidate to sit for the company coming
//  for placement and it returns a fat arrow function.The fat arrow function takes age as an 
// argument and returns true if the given student has board marks greater than minimum board 
// marks required by company and is above the required age set by the company.[If stuck check 
// the hint 2]
// Run the code across all the students and print the names of egligible students.



//1) usage of this keyword 
//1 In global  
// this can be used in for global assignment of variables

// this.table=`window  table`
// console.log(window.table);
//2 In methods
//  this can be used inside a function(method) whcih need to acces the data from the present object

// let johnsRoom ={
//     table:`johns table`,
//     cleanTable(){
//         console.log(`cleaning ${this.table}`);
//     }
// }
// johnsRoom.cleanTable()

//3 in call function 
// this is used were if we use call method for a function

// this.table=`window table`
// function cleanTable(){
//     console.log(`cleaning ${this.table}`);
// }
// cleanTable.call(this)
//4 in inner function
//this is also used in inenr functions but it may not work as expected so to avoid that we use call method

// this.table=`window table`
// function cleanTable(){

//     function innerrFn() {
//         console.log(`cleaning ${this.table}`);
//     }
//     innerrFn.call(this)
// }
// cleanTable()
//5 this inside constructor
//this keyword also used in constructor function which is used to create a new object

// let CreateRoom=function(name){
//     this.table=`${name}s table`
// }
// const jillsRoom=new CreateRoom(`jill`)
// const johnsRoom=new CreateRoom(`john`)

//6 this inside class
// rhis keyword is alsoused in class constructor function which will create instance of class
// class CreateRoom{
//     constructor(name){
//         this.table=`${name}s table`
//     }
    
// }
// const jillsRoom=new CreateRoom(`jill`)
// const johnsRoom=new CreateRoom(`john`)

// 2)
// class Student{
//     static count=0
//     constructor(name,age,phone,marks) {
//          this.name=name,
//          this.age=age ; 
//          this.phone=phone; 
//          this.marks=marks ;
//          Student.count++
//     }
    
//     eligibleOrNot(){
//        return this.marks>40?`eligible`:`not eligible`
//     }
// }
// let john=new Student(`john`,18,9123123323,33)
// let murali=new Student(`murali`,17,945678670,50)
// let jibin=new Student(`jibin`,19,9993123323,38)
// let athul=new Student(`athul`,20,912123123323,39)
// let sabin=new Student(`sabin`,20,945123123323,48)
// console.log(john.eligibleOrNot());
// console.log(murali.eligibleOrNot());
// console.log(Student.count);

// ******************************************************************************
//fat arrow function

// 1)
// let getA=a=>a
// console.log(getA(1));

// let getA=a=>a*a
// console.log(getA(2));

// let getA=(a)=>{return a*a}
// console.log(getA(2));

// let a=4
// let getA=()=>{return a*a}
// console.log(getA());

// let a=4
// let getA=_=>{return a*a}
// console.log(getA());

// let mult=(a,b)=>{return a*b}
// console.log(mult(2,3));

// var x=function(){
//    that=this
//     this.val=1
//     setTimeout(function() {
//         that.val++
//         console.log(that.val);
//     }, 1);
// }
// var xx=new x()

// var x=function(){
//     console.log(arguments[0]);
// }
// var x=()=>{console.log(arguments[0]);}

// var x=(...n)=>{console.log(n[0]);}
// x(1,2,3)

//2) 
class Student{
    static count=0
    constructor(name,age,phone,marks) {
         this.name=name,
         this.age=age ; 
         this.phone=phone; 
         this.marks=marks ;
         Student.count++
    }
    
    eligibleOrNot(){
       return this.marks>40?`eligible`:`not eligible`
    }
    eligibleForPlacements(minMark){
        return (minAge)=>{
            if (this.marks>minMark&&this.age>minAge) {
                return true
            }
            else{
               return false
            }
        }
    }
}
let john=new Student(`john`,18,9123123323,33)
let murali=new Student(`murali`,17,945678670,50)
console.log(john.eligibleForPlacements(30)(17)); 