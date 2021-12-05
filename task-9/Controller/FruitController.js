/**
 * TODO 3:
 * - import fruits dari data/fruits.js (done)
 * - refactor variabel ke ES6 variable (done)
 */
 const fruits = require('../data/fruits.js');

 /**
  * TODO 4:
  * - Buat method index. (done)
  * - Refactor function ke ES6 Arrow Function (done)
  * - Tampilkan data fruits. (done)
  *
  * @hint - Gunakan looping for of
  */
 const index = () => {
     for(let fruit of fruits){
         console.log(fruit);
        }
        console.log('');
    }
 
 /**
  * TODO 5:
  * - Buat method store. (done)
  * - Refactor function ke ES6 Arrow Function (done)
  * - Menambahkan data baru ke array fruits. (done)
  *
  * @param {string} name - Nama buah.
  *
  * @hint - Gunakan method push
  */
 const store = (name) => {
     fruits.push(name);
     index();
 }
 
 /**
  * TODO 6:
  * - Buat method update. (done)
  * - Refactor function ke ES6 Arrow Function (done)
  * - Memperbarui data fruits. (done)
  *
  * @param {number} position - Posisi atau index yang ingin diupdate.
  * @param {string} name - Nama buah yang baru.
  */
 const update = (position, name) => {
     fruits[position] = name;
     index();
 }

 /**
  * TODO 7:
  * - Buat method destroy. (done)
  * - Refactor function ke ES6 Arrow Function (done)
  * - Menghapus data fruits. (done)
  *
  * @param {number} position - Posisi atau index yang ingin dihapus
  *
  * @hint - Gunakan method splice
  */
 const destroy = (position) => {
     fruits.splice(0, 1);
     index();
 }
 
 /**
  * TODO 8: export method index, store, update, dan destroy (done)
  */
 module.exports = {index, store, update, destroy};