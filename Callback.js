function callbackFunction(){
    console.log ("Ini adalah contoh fungsi callback");
}

function greeting (callback,name){
    console.log( "Hai "+name );
    callback();
}
greeting(callbackFunction,"Ibnu");



