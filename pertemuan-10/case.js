const persiapan = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Persiapan ...');
        }, 3000)
    })
}

const rebusAir = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Rebus Air ...');
        }, 7000)
    })
}

const masak = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Masak Mie');
        }, 5000)
    })
}

const main = () => {
    persiapan()
        .then((result)=>{
            console.log(result);
            return rebusAir();
        })
        .then((result)=>{
            console.log(result);
            return masak();
        })
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })
}

main();