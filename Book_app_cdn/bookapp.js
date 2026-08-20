const bookdata = [
    {src: "https://www.bing.com/th/id/OIP.-z0DA20cOrqiC-WaKXyvfgAAAA?w=193&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",price: 500},
    {src: "https://www.bing.com/th/id/OIP.lgk9V18So_u548_JZgSBDwAAAA?w=193&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",price: 600},
    {src: "https://www.bing.com/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?w=193&h=290&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",price: 700},
    {src: "https://www.bing.com/th/id/OIP.l5EiUfa6V9Ivp1dwjNoNJAHaLH?w=193&h=290&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",price: 800}
]
function book(props)
{
    const image = React.createElement("img",{src:props.src, width: "75px", height: "75px"},null);
    const price = React.createElement("h3",{color: "violet"},`Price : ${props.price}`);
    const bt = React.createElement("button",{onClick: ()=>addtocart(props)},"Add to cart");
    const div = React.createElement("div",{className: "card"},[image,price,bt]);
    return div;
}
const cart = [];

function addtocart(props)
{
    cart.push(props);
    alert("Book added to cart successfully");
}

const bookstore = bookdata.map((b) => book(b));
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(bookstore);
