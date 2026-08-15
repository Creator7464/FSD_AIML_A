// spread and rest operator

const a = [1,2,3];
const b = a.map((n) => n*2);
const c = [...a,...b]; //... spread operator is used to clone content of an object/array, to merge or to pass the values
const student = {
    name: "jaikumar saini",
    age: 20,
    branch: "AIML"
};
const dup_student = {...student};
console.log("c = ",c);
console.log(dup_student);
