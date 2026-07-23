
function register(cb){
    setTimeout(() =>{
         console.log("Registering the user...");
         cb();
    }, 6000);

}

function login(cb){
    console.log("Login the user");
    cb();
}

function get_data(cb){
    setTimeout(() => {
        console.log("getting data");
        cb();
    }, 2000);

}

function display_data(){
    setTimeout(() => {
        console.log("displaying data");
    }, 1000);
    
}

// call back hell
register(() => {
    login( () => {
        get_data(
            () => {
                display_data();
            }
        )
    })

})