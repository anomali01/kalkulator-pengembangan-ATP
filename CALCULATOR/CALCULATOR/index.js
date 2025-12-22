// Mengambil elemen display dan semua tombol
const layarKalkulator = document.querySelector('#display');
const semuaTombol = document.querySelectorAll('.btn');

// Fungsi untuk menghitung hasil
function hitungHasil(ekspresi) {
    try {
        const hasil = eval(ekspresi);
        return hasil;
    } catch (error) {
        return 'Error';
    }
}

// Fungsi untuk menghapus karakter terakhir
function hapusKarakterTerakhir(teks) {
    if (teks.length > 0) {
        return teks.substring(0, teks.length - 1);
    }
    return teks;
}

// Fungsi untuk mengosongkan layar
function bersihkanLayar() {
    layarKalkulator.innerText = '';
}

// Fungsi untuk menambah karakter ke layar
function tambahKeLayar(karakter) {
    layarKalkulator.innerText += karakter;
}

// Fungsi utama untuk menangani klik tombol
function prosesKlikTombol(event) {
    const nilaiTombol = event.target.innerText;
    
    if (nilaiTombol === 'Clear') {
        bersihkanLayar();
    } else if (nilaiTombol === '=') {
        const ekspresiSaatIni = layarKalkulator.innerText;
        const hasilPerhitungan = hitungHasil(ekspresiSaatIni);
        layarKalkulator.innerText = hasilPerhitungan;
    } else if (nilaiTombol === 'Del') {
        const teksSekarang = layarKalkulator.innerText;
        layarKalkulator.innerText = hapusKarakterTerakhir(teksSekarang);
    } else {
        tambahKeLayar(nilaiTombol);
    }
}

// Menambahkan event listener ke setiap tombol
semuaTombol.forEach(function(tombol) {
    tombol.addEventListener('click', prosesKlikTombol);
});