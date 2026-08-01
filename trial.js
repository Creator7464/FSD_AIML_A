const obj =  new Promise((resolve,reject) =>
{
    console.log("This is a promise object");
    console.log("dividing two numbers");
    try
    {
        console.log("Resolving promise with value ",);
        throw "ZERO DIVISION ERROR";
    }
    catch(err)
    {
        console.log("Error occured, rejecting promise");
        reject(err);
    }
})

const now  = new Date();
const obj2 = await obj.catch((value) => {console.log(value)});
const now2 = new Date();
console.log(now2-now);
console.log(obj);
console.log(obj2);
