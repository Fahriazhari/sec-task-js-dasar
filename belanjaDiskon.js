let headset = 225000;
let mouse = 150000;
let keyboad = 350000;
let totalBelanja = headset + mouse + keyboad;
let pembayaran = 800000;


if (totalBelanja >= 800000) {
    totalPrice = totalBelanja - (totalBelanja * 0.15);
} else if (totalBelanja >= 500000) {
    totalPrice = totalBelanja - (totalBelanja * 0.1);
} else if (totalBelanja >= 250000) {
    totalPrice = totalBelanja - (totalBelanja * 0.05);
} else {
    totalPrice = totalBelanja;
}

let diskon = totalBelanja - totalPrice;
let kembalian = pembayaran - totalPrice;


console.log("======Rincian Pembelian======");
console.log(`Harga Headset: Rp ${headset}`);
console.log(`Harga Mouse: Rp ${mouse}`);
console.log(`Harga Keyboard: Rp ${keyboad}`);
console.log(`Total Harga: Rp ${totalBelanja}`);
console.log(`Total Diskon: Rp ${diskon}`);
console.log(`Harga Setelah Diskon: Rp ${totalPrice}`);
console.log(`Pembayaran: Rp ${pembayaran}`);
console.log(`Kembalian: Rp ${kembalian}`);


