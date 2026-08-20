const data = [
    {image : "", price: 550},
    {image: "", price: 700},
    {image: "", price: 500}
]
function addbook(props){
    const child = document.createElement("div");
    child.setAttribute("class", "card");
    const image = document.createElement("img");
    image.setAttribute("width", "60px");
    image.setAttribute("height", "60px");
    image.setAttribute("src", props.image);
    const price = document.createElement("p");
    price.innerText = `price: ${props.price}/-`
    child.appendChild(image);
    child.appendChild(price);  
    return child;
}
const outer = document.createElement("div");
outer.setAttribute("class","booklist");
data.map((book) => {outer.appendChild(addbook(book))});
const parent = document.getElementById("root");
parent.appendChild(outer);




