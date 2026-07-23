function register(){
    wait_for_input(2000);
    console.log("Registering the user...");

}

function login(){
    console.log("Login the user");
}

function get_data(){
    console.log("getting data");
}

function display_data(){
    console.log("displaying data");
}

function wait_for_input(delay){
    const ms = Date.now() + delay;
    while (Date.now() < ms){

    }

}

register();
login();
get_data();
display_data();
