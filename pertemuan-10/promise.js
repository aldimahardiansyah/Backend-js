function download(){
    return new Promise(function(resolve, reject){
        const status = false;
    
        setTimeout(() => {
            if (status){
                resolve('Download Selesai');
            } else{
                reject('Download Gagal');
            }
        }, 5000);
    })
}

download()
.then(function(result){
    console.log(result);
})
.catch(function (result) {
    console.log(result);
});