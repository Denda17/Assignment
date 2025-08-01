let data = "belajar javascript" //deklarasi dan assignment
console.log (data, "<< ini sebelum re-assign")
data = "javascript"  //re-assignment
console.log (data, "<< ini sudah re-assign" )


//rule dalam penulisan variabel :
//1. nama harus menggunakan camelcase / snake_case

let namaVariable = "contoh nama variabel camelcase"
let nama_variable = "contoh nama variabel snake_case"
let NamaVariable = "contoh variable pascalcase"

//tidak bisa pakai angka
//nama variabel mencerminkan data yang disimpan

let awal2 = "angka"
console.log (2)

let data3 = "Jalan-jalan"
let data2 = "Ke bandung"

let jumlah_data = data3 + data2 //template concatination
let jumlah_data2 = `${data3} ${data2}` //template literal
console.log (jumlah_data, "<< gabungan 2 data", jumlah_data.length, "<< jumlah data")
console.log (jumlah_data2, "<< gabungan 2 data", jumlah_data2.length, "<< jumlah data") 

let angka_1 = 10
angka_1 += 2
let angka_2 = 12

console.log (angka_1)
console.log (angka_1 + angka_2)

//tipe data primitif string, number, boolean
//tipe data non primitif null=datanya ada tapi tidak terdefinisi, undefined data tidak ada
//tipe data struktur Array dan oobject
//Array > kolektif > tumpukan data
// ciri : menggunakan [], array menggunakan .length, data dalam array disebut elemen, array bisa dilakukan  pass by reference, array index, tipe data yang mutable (tiap elemen bisa diganti)

let olah_raga = ["sepak bola", "badminton", "bola voli", "basket"]
let olahraga = olah_raga[3]
console.log (olahraga)
console.log(olahraga[3])
olah_raga[3] = "futsal" 
console.log(olah_raga)

olah_raga.push ('berenang')
console.log (olah_raga)

olah_raga.unshift ('tenis')
console.log (olah_raga)



//object menggambarkan (manusia > nama, tgl lahir, usia dll)
//menggunakan {}
//tidak punya length
//tidak punya index
//key merupakan hal paling penting
//unik

let person = {
    nama: "udin",
    umur: 25,
    gender: "Laki-laki",
    "sudah menikah": false,
    hobi: ["olah raga", "main game"],
    pet: {
        jenis: "kucing",
        nama: "milo",
        umur: "2"
    }
}

//cara akses data object
// .dot , hanya bisa 1 kata, bersifat statis
let nama = person.nama
console.log (nama)

//[] bracket > digunakan key yang lebih dari 1 kata

let sudahMenikah = person ["sudah menikah"]
console.log (sudahMenikah)

let hobi = person.hobi
let tidur = hobi[1]

let pet = person.pet.nama
console.log (pet)

//variabel untuk data dinamis

let key = "hobi"
let data11 = person[key]
console.log (data11)

//cara untuk menambahkan object

person ["makanan favorite"] = ["nasi goreng", "bakso"]
console.log (person)









