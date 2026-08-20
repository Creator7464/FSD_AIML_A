
const data = [
    {img: "", price: "Rs.500"},
    {img: "", price: "Rs.700"},
    {img: "", price: "Rs.600"}
]
function addBook(props)
{
    const image = React.createElement("img",{src: props.img, width: "80px",height: "75px"});
    const para = React.createElement("p",{color: "violet"},"price: "+props.price);
    const child = React.createElement("div", {className: "card"},image,para);
    return child;
}
const bookdata = React.createElement("div",{className: "booklist"},data.map((b) => addBook(b)));
const parent1 = document.getElementById("root");
const parent2 = document.getElementById("root2");
ReactDOM.render(bookdata,parent1);



