const books = 
[
    {src: "", price: 200},
    {src: "", price: 200},
    {src: "", price: 200},
    {src: "", price: 200},
    {src: "", price: 200}
]
function Book({props})                          // here in function call {} is object destructuring, go to function call 
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
            {                                       // also { } is used to let the babel know whatever is inside is not a plain text, it a js expression
             books.map((b) => <Book props = {b}/>)      // react bundels all the property given to react element in a single object
            }                                          
        </div>                                              // so above expression in callback evaluates to {props: b}, thats why we have to use destructuring in funtion definition.
        )
}
// we use { } to revert to js for function calling and passing values and for any evaluation.

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App/>);

