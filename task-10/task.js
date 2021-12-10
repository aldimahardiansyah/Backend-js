/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
 const showDownload = (result) => {
    console.log("Download selesai");
    console.log("Hasil Download: " + result);
  }
  
  /**
   * Fungsi untuk download file
   * @param {function} callback - Function callback show
   */
  const download =() => {
    return new Promise((resolve, reject)=>{
      
      setTimeout(()=> {
        const result = "windows-10.exe";
        const status = true;

          if(status){
            resolve(result);
          }else{
            reject('Download gagal');
          }
      }, 3000);
    })
}
  
  download()
    .then((result)=>{
      return showDownload(result);
    })
    .catch((err)=>{
      console.log(err);
    });
  
  /**
   * TODO:
   * - Refactor callback ke Promise atau Async Await
   * - Refactor function ke ES6 Arrow Function
   * - Refactor string ke ES6 Template Literals
   */