function register(){
    setTimeout(() =>{
         console.log("Registering the user...");
    }, 6000);

}

function login(){
    console.log("Login the user");
}

function get_data(){
    setTimeout(() => {
        console.log("getting data");
    }, 2000);

}

function display_data(){
    setTimeout(() => {
        console.log("displaying data");
    }, 1000);
    
}


register();
login();
get_data();
display_data();
