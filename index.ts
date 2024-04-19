// Question 124
interface Student {
    name:string;
    id:number;
    rollno:number;
    age:number;
    show():string
}

let Student1:Student = {
    name:"Tanveer",
    id:45,
    rollno : 809,
    age: 20,
    show() {
        return `Student name is ${this.name} Student id is ${this.id} \n Student roll no is ${this.age} \n Student age is ${this.age}`;
    },
}
console.log(Student1.show());

// Question 125
interface AddNumber {
    num1:number;
    num2:number;
    add():number;
}

let Add2Number:AddNumber = {
    num1 : 5,
    num2 : 5,
    add() {
        return 5 + 5;
    },
}
console.log(Add2Number.add());

// Question 126
const myObject = {
    property: "Value",
    outerMethod: function () {
      console.log(this.property); // Works as expected, logs "Value"
  
      const innerMethod = () => {
        console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
      };

    // function innerMethod(){
    //     console.log(this.property);  //Cannot access because it is simple function
    // }
  
      innerMethod();
    },
  };
  
  myObject.outerMethod();