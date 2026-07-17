const a = [1,2,3,4,5,6,7,8,9,10];
const b = a.filter((x) => (x%2 == 0));
console.log("Even numbers = ",b);
const c = a.map((x) => (x*x));
console.log("Square of numbers = ", c);
const d = c.reduce((x,y) => (x+y));
console.log("Sum of squares = ",d);