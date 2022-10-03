//Fungsi dapat assign pada variabel
const contohFungsi = ()=> {
    return (" Ini contoh fungsi sebagai assign variabel");

}
console.log(contohFungsi());

//Fungsi dapat dipakai sebagai argumen di fungsi lain
const contohFungsi2=(func1)=>{
    return func1() + " dan sebagai argumen";
}

console.log(contohFungsi2(contohFungsi));

//Fungsi dapat di retur oleh fungsi lainnya
const contohFungsi3 = () =>{
    function cetak(){
        return ("Fungsi dapat di return oleh fungsi lainnya");
    }
    return cetak();
}

console.log(contohFungsi3());