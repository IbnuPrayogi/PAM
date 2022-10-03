function testPromise(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('selesai')
    
        },3000)
    });

}
async function testAsync(){
    const test = await testPromise();
    console.log(test);
}

testAsync();