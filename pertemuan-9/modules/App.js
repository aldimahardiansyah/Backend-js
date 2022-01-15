// import method index dan store
const  { index, store } = require("./FruitController.js");

const main = () => {
    index();
    store("Anggur");
}

main();