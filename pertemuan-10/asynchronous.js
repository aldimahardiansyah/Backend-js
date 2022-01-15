const dua = () =>{
    console.log('dua');
}

console.log('satu');

setTimeout(dua, 3000);

console.log('tiga');

/* Output:
satu
tiga
dua
*/