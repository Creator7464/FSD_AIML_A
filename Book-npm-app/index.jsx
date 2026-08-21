const books = 
[
    {src: "", price: 200},
    {src: "", price: 200},
    {src: "", price: 200},
    {src: "", price: 200},
    {src: "", price: 200}
]
function Book({props})
{
    return (
        <div>
            <img src = {props.src} height = "100px" width = "100px"/>
            <h2>Price : {props.price}</h2>
            <button>Add to cart</button>
        </div>
    )
}
function App()
{
    return (
        <div>
            {
             books.map((b) => <Book props = {b}/>)
            }
        </div>
        )
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App/>);