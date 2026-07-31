const student = {
    name: "jakumar saini",
    age: 20,
    branch: "AIML"
}
const {name, ...a} = student            // ... bundles the remaining object into variable a
function add_address(...address){
    const [city, street = '-'] = address;
    return {...student, "address":{"city": city, "street": street}};
}

console.log(add_address("ghaziabad","crossing republik"));
console.log(add_address("ghaziabad"));
console.log(a);