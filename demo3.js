function sum(...arr)            // rest operator bundles all values and returns an array
{
    let sum = 0;
    for (i of arr)
    {
        sum = sum + i;
    }
    return sum;
}
const [...a] = [1,2,3,4,5,6,7];
const letters = [..."jaikumar saini"]
console.log(letters);
console.log(a);
console.log("sum = ", sum(1,2,3,4,5,6,7));
console.log("sum = ",sum(...a));  // spread expands the values and rest bundles them into an array

function add(x,y,z){
    return x+y+z;
}
console.log(add(...[1,2,3]));