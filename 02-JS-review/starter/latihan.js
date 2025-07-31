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


// 1.
const profile = {
  username: "raihan_putra",
  email: "raihan@example.com",
  verified: true
};

// TODO:
// 1. Ambil username tapi simpan ke variabel dengan nama 'namaPengguna'
// 2. Cetak ke konsol: "Username: raihan_putra (verified: true)"

const {username : namaPengguna, verified} = profile; //username : namaPengguna is for storing username to namaPengguna
console.log("Username: " + namaPengguna + " (verified: " + verified);

//------------------------------------------------------------------------------------------------------ 

// 2. 
const hasil = ["Sukses"];

// TODO:
// 1. Ambil elemen pertama sebagai 'status'
// 2. Ambil elemen kedua sebagai 'kode', jika tidak ada beri default "000"
// 3. Cetak ke konsol: "Status: Sukses, Kode: 000"

const [status, kode = "000"] = hasil; //kode = "000" is default parameter which means if there is no value, it will print the default parameter instead of undefined
console.log("Status : " + status + ", " + "Kode: " + kode)

// -------------------------------------------------------------------------------------------------------------

// 3.
const response = {
  data: {
    user: {
      id: 42,
      name: "Raihan"
    },
    token: "abc123"
  }
};

// TODO:
// 1. Buat fungsi `tampilkanUser` yang menerima parameter berupa objek di atas
// 2. Gunakan destructuring langsung di parameter fungsi
// 3. Cetak: "ID: 42, Nama: Raihan, Token: abc123"

function tampilkanUser({data: {user: {id, name}, token}}) {
    console.log("ID: " + id + ", " + "Nama: " + name + " Token: " + token);
}

tampilkanUser(response);