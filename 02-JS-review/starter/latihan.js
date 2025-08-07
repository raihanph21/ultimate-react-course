// // const user = {
// //   name: "Raihan",
// //   age: 25,
// //   isPremium: true
// // };

// // // TODO:
// // // 1. Ambil name dan isPremium dari objek user dengan destructuring
// // // 2. Cetak ke konsol: "Nama: Raihan, Premium: true"

// // console.log("Nama: " + user.name + "," + " Premium: " + user.isPremium)

// // const nama = user.name;
// // const paket = user.isPremium;

// // console.log("Nama: " + nama + ", "+ "Premium: " + paket)

// // ------------------------------------------------------------------------------------------------------------------

// const colors = ["red", "green", "blue", "yellow"];

// // TODO:
// // 1. Ambil elemen pertama dan ketiga dari array colors (skip yang kedua)
// // 2. Cetak ke konsol: "Warna favorit: red dan blue"

// const warna1 = colors[0]
// const warna2 = colors[2]

// console.log("Warna favorit: " + warna1 + " dan " + warna2)

// // ----------------------------------------------------------------------------------------------------------------

// const book = {
//   title: "Eloquent JavaScript",
//   author: "Marijn Haverbeke",
//   genres: ["Programming", "JavaScript"],
//   publication: {
//     year: 2018,
//     publisher: "No Starch Press"
//   }
// };

// // TODO:
// // 1. Ambil title dan author
// // 2. Ambil genre pertama
// // 3. Ambil tahun publikasi dari properti nested "publication"
// // 4. Cetak ke konsol: 
// //    "Judul: Eloquent JavaScript, Genre: Programming, Tahun: 2018"

// const judul = book.title, penulis = book.author, genreUtama = book.genres[0], tahunPublikasi = book.publication.year;
// console.log("Judul: " + judul + ", Genre: " + genreUtama + ", Tahun: " + tahunPublikasi)


// // 1.
// const profile = {
//   username: "raihan_putra",
//   email: "raihan@example.com",
//   verified: true
// };

// // TODO:
// // 1. Ambil username tapi simpan ke variabel dengan nama 'namaPengguna'
// // 2. Cetak ke konsol: "Username: raihan_putra (verified: true)"

// const {username : namaPengguna, verified} = profile; //username : namaPengguna is for storing username to namaPengguna
// console.log("Username: " + namaPengguna + " (verified: " + verified);

// //------------------------------------------------------------------------------------------------------ 

// // 2. 
// // const hasil = ["Sukses"];

// // // TODO:
// // // 1. Ambil elemen pertama sebagai 'status'
// // // 2. Ambil elemen kedua sebagai 'kode', jika tidak ada beri default "000"
// // // 3. Cetak ke konsol: "Status: Sukses, Kode: 000"

// // const [status, kode = "000"] = hasil; //kode = "000" is default parameter which means if there is no value, it will print the default parameter instead of undefined
// // console.log("Status : " + status + ", " + "Kode: " + kode)

// // -------------------------------------------------------------------------------------------------------------

// // 3.
// // const response = {
// //   data: {
// //     user: {
// //       id: 42,
// //       name: "Raihan"
// //     },
// //     token: "abc123"
// //   }
// // };

// // // TODO:
// // // 1. Buat fungsi `tampilkanUser` yang menerima parameter berupa objek di atas
// // // 2. Gunakan destructuring langsung di parameter fungsi
// // // 3. Cetak: "ID: 42, Nama: Raihan, Token: abc123"

// // function tampilkanUser({data: {user: {id, name}, token}}) {
// //     console.log("ID: " + id + ", " + "Nama: " + name + " Token: " + token);
// // }

// // tampilkanUser(response);

// //soal reza
// const profile1 = {
//   username: "alif",
//   bio: null,
//   social: {
//     instagram: "@alif_dev"
//   }
// };

// // TODO:
// // 1. Cetak bio jika ada, jika tidak tampilkan: "Bio belum diisi"
// // 2. Cetak username IG dengan optional chaining, outputnya: "Instagram: @alif_dev"
// const {username, bio, social} = profile1 
// console.log(bio || "bio tidak ada")

// console.log("Instagram: " + social?.instagram)

// //------------------------------------------------------------------------------------------------------------

// //1.
// // const user = {
// //   name: "Raihan",
// //   preferences: {
// //     theme: "dark"
// //     // notice: tidak ada key `language`
// //   }
// // };

// // // TODO:
// // // 1. Cetak user.preferences.language jika ada, jika tidak tampilkan: "Bahasa default"
// // // 2. Cetak theme dengan optional chaining, output: "Tema: dark"
// // const {name, preferences: {theme} } = user;
// // console.log(user.preferences.language || "Bahasa default");

// // console.log("Tema: " + theme)

// //------------------------------------------------------------------------------------------------------------

// //2. 
// // const produk = {
// //   nama: "Kaos Polos",
// //   stok: 0,
// //   harga: 100000
// // };

// // // TODO:
// // // 1. Cetak "Stok: 0" — jangan sampai fallback ke "Stok belum tersedia" hanya karena 0 adalah falsy!
// // // 2. Gunakan operator yang tepat, agar 0 tetap tercetak.

// // const {nama, stok, harga} = produk;
// // console.log("Stok: " + stok)

// //latihan function
// // 1.
// // TODO:
// // 1. Buat fungsi bernama 'greet' yang menerima 1 parameter 'nama'.
// // 2. Fungsi ini mengembalikan string "Halo, [nama]!".
// // 3. Jika tidak ada nama yang diberikan, tampilkan "Halo, teman!".

// function greet(nama = "teman!") {
//   return "Halo " + nama;
// }

// console.log(greet())


// //2.
// // TODO:
// // 1. Buat fungsi 'hitungTotal' dengan 2 parameter: harga & jumlah
// // 2. Jika 'jumlah' tidak diberikan, default-nya adalah 1
// // 3. Fungsi mengembalikan hasil harga * jumlah
// // function hitungTotal(harga, jumlah = 1) {
// //   return harga * jumlah;
// // }

// // console.log(hitungTotal(2, 9))



// //3.
// // TODO:
// // 1. Buat function expression bernama 'luasPersegi' untuk menghitung luas persegi
// // 2. Buat juga versi arrow function-nya bernama 'kelilingPersegi'
// // 3. Keduanya menerima parameter 'sisi'
// function luasPersegi(s) {
//   return s * s;
// }

// const kelilingPersegi = (s) => {
//   return s*4
// }

// console.log(luasPersegi(4))
// console.log(kelilingPersegi(3))


// //latihan template literals
// //1. 
// // const nama = "Alif";
// // const umur = 21;

// // // TODO:
// // // Cetak: "Halo, nama saya Alif dan umur saya 21 tahun."
// // console.log(`Halo nama saya ${nama} dan umur saya ${umur} tahun`)



// //2.
// // const produk = {
// //   nama: "Kopi Hitam",
// //   harga: 18000,
// //   stok: 12
// // };

// // // TODO:
// // // Cetak: "Produk: Kopi Hitam (Rp18000) — Tersisa 12 stok"
// // const {nama, harga, stok} = produk
// // console.log(`Produk: ${nama} (${harga}) - Tersisa 12 stok`)



// //3. 
// const pengguna = {
//   nama: "Zahra",
//   status: "Premium"
// };

// const pesan = "Selamat datang kembali";

// // TODO:
// // Cetak: "Selamat datang kembali, Zahra! Status akunmu: Premium"
// const {nama, status} = pengguna
// console.log(`${pesan}, ${nama}! Status akunmu: ${status}`)


// //-----------------------------------------------------------------------------------------------------------------


// //latihan rest and spread operator
// //1.
// const angkaAwal = [1, 2, 3];
// const angkaTambahan = [4, 5];

// // TODO:
// // Gabungkan kedua array di atas jadi satu array baru bernama semuaAngka
// // Output yang diharapkan: [1, 2, 3, 4, 5]
// const hasil = [...angkaAwal, ...angkaTambahan] //... in function is called REST, and outside function called SPREAD
// console.log(hasil)


// //2. 
// // // TODO:
// // Buat fungsi jumlahkanSemua(...angka) yang menerima jumlah argumen tak terbatas
// // dan mengembalikan total dari semua angka yang diberikan

// // Contoh pemanggilan:
// // console.log(jumlahkanSemua(1, 2, 3, 4)) ➜ Output: 10
// const jumlahkanSemua = (...angka) => {
//   return angka.reduce((total, nilai) => total + nilai, 0)
// }

// console.log(jumlahkanSemua(2,4,8))


// //3.
// const userDefault = {
//   role: "user",
//   active: true
// };

// const userBaru = {
//   name: "Raihan",
//   age: 24
// };

// // TODO:
// // Gabungkan userDefault dan userBaru ke dalam satu objek bernama fullUser
// // Output: { role: "user", active: true, name: "Raihan", age: 24 }
// const {role, active} = userDefault
// const {name, age} = userBaru

// // const fullUser = {
// //   role,
// //   active,
// //   name,
// //   age
// // }

// //atau
// const fullUser = {...userDefault, ...userBaru}

// console.log(fullUser)

//------------------------------------------------------------------------------------------------------

// latihan ternary operator
//1. 
// TODO:
// Jika nilai >= 75, cetak "Lulus", selain itu cetak "Tidak Lulus"

// const nilai = 80;

// // Gunakan ternary operator di bawah ini:
// const hasil = nilai >= 75 ? "Lulus" : "Tidak Lulus"
// console.log(hasil);


// //2. 
// // TODO:
// // Jika user adalah admin, cetak "Selamat datang, Admin!"
// // Jika bukan, cetak "Akses terbatas."

// // const user = {
// //   name: "Budi",
// //   isAdmin: false
// // };
// // const {name, isAdmin} = user

// // const pesan = isAdmin === true ? "Selamat datang, Admin!" : "Akses terbatas."  // atau bisa const pesan = isAdmin ? "Selamat datang, Admin!" : "Akses terbatas."; karena isAdmin adalah boolean

// // console.log(pesan);


// //3. 
// // TODO:
// // Jika produk masih tersedia (stok > 0), cetak "Tersedia"
// // Jika tidak, cetak "Habis"

// const produk = {
//   nama: "Mouse Wireless",
//   stok: 0
// };

// const {nama, stok} = produk;

// console.log(stok > 0 ? "Tersedia" : "Habis"); //bisa juga console.log(`${nama}: ${stok > 0 ? "Tersedia" : "Habis"}`);


// // -----------------------------------------------------------------------------------------------------
// //1.
// const user = {
//   name: "Raihan",
//   email: ""
// };

// // TODO:
// // 1. Cetak nama user, jika kosong tampilkan "Pengguna Baru"
// // 2. Cetak email jika ada, kalau tidak tampilkan "Email belum diisi"
// const {name, email} = user;
// const displayName = name || "Pengguna Baru"
// const displayEmail = email || "Email belum diisi"

// console.log(`${displayName} ${displayEmail}`)



// //2. 
// const isLoggedIn = true;
// const hasAccess = false;

// // TODO:
// // 1. Jika user sudah login dan punya akses, tampilkan "Selamat datang!"
// // 2. Jika tidak, jangan tampilkan apapun




// //3. 
// const settings = {
//   darkMode: false,
//   language: "id"
// };

// // TODO:
// // 1. Cetak bahasa (language), default ke "en" jika tidak ada
// // 2. Aktifkan dark mode hanya jika darkMode bernilai true
// const {darkMode, language} = settings;
// console.log(language || "en")
// darkMode && console.log("Dark mode aktif")

//... di parameter function namanya rest
//... di array atau object assignment (diluar function) namanya spread

//latihan immutable array
//1. Buat array baru produkBaru yang berisi semua produk dari produkAwal dan satu produk tambahan { id: 3, nama: "Coklat", stok: 15 } tanpa mengubah produkAwal.
// const produkAwal = [
//   { id: 1, nama: "Kopi", stok: 10 },
//   { id: 2, nama: "Teh", stok: 20 },
// ]

// const produk3 = {
//   id: 3,
//   nama: "Coklat",
//   stok: 15
// }

// const produkBaru = [...produkAwal, produk3]
// console.log(produkBaru)

// //2. Dari array produkAwal yang sama seperti di atas, buat array baru produkTanpaTeh yang berisi semua produk kecuali yang id-nya 2 (yaitu Teh).
// const produkTanpaTeh = produkAwal.filter(produk => produk.id !== 2)
// console.log(produkTanpaTeh)

// //3. Masih dari produkAwal, buat array baru produkUpdate yang sama persis, kecuali produk dengan id 1 (Kopi) stoknya diubah jadi 99.

// const produkUpdate = produkAwal.map((produk) => produk.id === 1 ? {...produkAwal, stok: 99 } : produkAwal)
// console.log(produkUpdate)



//latihan promises
/*
Anggap kamu lagi membangun aplikasi toko online. Kamu punya fungsi yang:
Mengecek stok barang (asynchronous)
Mengirimkan notifikasi ke user jika stok tersedia
Menolak jika stok kosong
*/

//LATIHAN 1: Buat Promise sederhana
/* Instruksi:
Buat sebuah Promise bernama cekStok
Kalau stok > 0, resolve("Stok tersedia")
Kalau stok === 0, reject("Stok habis") */

// const cekStok = new Promise ((resolve, reject) => {
//   const stok = 5;
  
//   if (stok > 0) {
//     resolve("Stok Tersedia")
//   } else {
//     reject("Stok Habis")
//   }
// });

// //LATIHAN 2: Konsumsi Promise dengan .then() dan .catch()
// /*Instruksi:
// Panggil cekStok
// Kalau berhasil, cetak: ✅ Stok tersedia
// Kalau gagal, cetak: ❌ Stok habis */

// cekStok
//   .then((benar) => {
//     console.log(benar)
//   })
//   .catch((salah) => {
//     console.log(salah)
//   })

// /*3.  LATIHAN 3: Ubah jadi fungsi
// Instruksi:
// Buat function periksaStok(stok) yang mengembalikan Promise
// Lalu panggil function ini dengan stok berbeda-beda:
// periksaStok(3)
// periksaStok(0)*/

// const periksaStok = (stok) => {
//   return new Promise((resolve, reject) => {
//     if (stok > 0) {
//       resolve ("Stok tersedia")
//     } else {
//       reject ("Stok Habis")
//     }
//   })
// }

// periksaStok(50)
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))



//Latihan async/await
//1. Ubah Promise ke async/await

const cekStok = (stok) => {
  return new Promise((resolve, reject) => {
    if (stok > 0) {
      resolve ("Stok Tersedia")
    } else {
      reject("Stok Habis")
    }
  });
};

async function periksa(stok) {
  try {
    const hasil = await cekStok(stok)
    console.log(hasil);
  } catch (err) {
    console.log(err)
  }
}

periksa(10)
periksa (0)