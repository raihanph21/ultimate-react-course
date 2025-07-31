const user = {
  name: "Raihan",
  age: 25,
  isPremium: true
};

// TODO:
// 1. Ambil name dan isPremium dari objek user dengan destructuring
// 2. Cetak ke konsol: "Nama: Raihan, Premium: true"

console.log("Nama: " + user.name + "," + " Premium: " + user.isPremium)

const nama = user.name;
const paket = user.isPremium;

console.log("Nama: " + nama + ", "+ "Premium: " + paket)

// ------------------------------------------------------------------------------------------------------------------

const colors = ["red", "green", "blue", "yellow"];

// TODO:
// 1. Ambil elemen pertama dan ketiga dari array colors (skip yang kedua)
// 2. Cetak ke konsol: "Warna favorit: red dan blue"

const warna1 = colors[0]
const warna2 = colors[2]

console.log("Warna favorit: " + warna1 + " dan " + warna2)

// ----------------------------------------------------------------------------------------------------------------

const book = {
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  genres: ["Programming", "JavaScript"],
  publication: {
    year: 2018,
    publisher: "No Starch Press"
  }
};

// TODO:
// 1. Ambil title dan author
// 2. Ambil genre pertama
// 3. Ambil tahun publikasi dari properti nested "publication"
// 4. Cetak ke konsol: 
//    "Judul: Eloquent JavaScript, Genre: Programming, Tahun: 2018"

const judul = book.title, penulis = book.author, genreUtama = book.genres[0], tahunPublikasi = book.publication.year;
console.log("Judul: " + judul + ", Genre: " + genreUtama + ", Tahun: " + tahunPublikasi)