export const sum = (...num) =>{                // alternative:-  write export before 
    return num.reduce((x,y) => x+y)
}

export const avg = (...arr) =>{
    let n = arr.length;
    return arr.reduce((x,y) => (x+y))/n
}
console.log("inside export");
// export default sum;                          