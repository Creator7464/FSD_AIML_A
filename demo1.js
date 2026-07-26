const num = [1,2,3,4,5]
const a = num[0];
const b = num[1];

// one linear for the above statements
const [c,d] = num;      // array destructuring
console.log("c = ", c);
console.log("d = ",d);

const student = {
    name: "jaikumar saini",
    age: 20,
    branch: "AIML"
}

// const name  = student.name;
// const age = student.age;

//object destructuring
const {name, age} = student;
console.log("name = ", name);
console.log("age = ", age);