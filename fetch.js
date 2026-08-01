async function add_data_to_table(){
    const el = document.getElementById("products");
    try{

        const res = await fetch("https://dummyjson.com/product/?limit=100");
        const data = await res.json();
        const products = data.products;
        console.log(products);
        
        products.forEach(item => {
                el.innerHTML += `<tr>
                <td>${item.title}</td> 
                <td>${item.category}</td> 
                <td>${item.stock}</td>
                <td>₹${item.price}</td>
                </tr>`
            });
        }
    catch(err)
    {
        console.log("error = ", err);
        el.innerText = "Network error"
    }
}
add_data_to_table(res);