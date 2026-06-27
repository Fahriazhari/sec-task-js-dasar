for (let angka = 1; angka <= 20; angka++) {
    if (angka % 2 !== 0 && angka % 3 !== 0) { // Jika angka tidak habis dibagi 2 dan tidak habis dibagi 3
        console.log(`${angka} - Apel Pagi`); // Maka print angka dan aktivitas apel pagi
    } else if (angka % 2 === 0 && angka % 3 !== 0) { // Jika angka habis dibagi 2 dan tidak habis dibagi 3
        console.log(`${angka} - Mengikuti Pelatihan`); // Maka print angka dan aktivitas mengikuti pelatihan
    } else if (angka % 2 !== 0 && angka % 3 === 0) { // Jika angka tidak habis dibagi 2 dan habis dibagi 3
        console.log(`${angka} - Mengikuti Uji Kompetisi`); // Maka print angka dan aktivitas mengikuti uji kompetisi
    } else { // Jika angka habis dibagi 2 dan habis dibagi 3
        console.log(`${angka} - Mendapatkan Sertifikat`); // Maka print angka dan aktivitas mendapatkan sertifikat
    }
}