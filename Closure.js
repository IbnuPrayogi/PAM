function parentFunction(){
    var parentVar = "Variabel fungsi Parent";
    function childFunction (){
        console.log ("Fungsi ini dapa mengakses " + parentVar);
    }
    childFunction();
}

parentFunction();
