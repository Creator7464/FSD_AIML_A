
function register(){
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>{
            resolve();
            console.log("Registering the user...");
        },1000)
    })

}

function login(){
    return new Promise((resolve, reject) => {
        resolve();
        console.log("Login the user")
    })
}

function get_data(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
            console.log("getting data");
        },2000)
    })
}

function display_data(){
    return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve();
            console.log("displaying data");
    }, 1000);
    
    })
}

// register().then(login)
// .then(get_data)
// .then(display_data)
// .catch((err) => {
//     console.log("Error: ", err)
// })

async function test(){
    try{
        await register();
        await login();
        await get_data();
        await display_data();
    }
    catch(err)
    {
        console.log("Error: ",err);
    }
}
test();