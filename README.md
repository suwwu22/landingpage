# Portofolio — Bagas Satrio Himawan

## Struktur folder
```
portfolio-project/
├── index.html          <- halaman utama
├── package.json        <- daftar dependency & perintah build
├── tailwind.config.js  <- konfigurasi warna & font kustom
├── src/
│   └── input.css        <- sumber Tailwind (jangan dihapus)
├── css/
│   └── style.css        <- HASIL BUILD, otomatis dibuat, jangan diedit manual
├── js/
│   └── app.js            <- semua interaktivitas (scroll reveal, tombol ke atas, salin email)
└── assets/               <- taruh foto-foto kamu di sini
```

## Cara install & menjalankan (sekali saja di awal)
1. Install Node.js dari https://nodejs.org (pilih versi LTS).
2. Buka folder ini di terminal / VS Code.
3. Jalankan: `npm install`
4. Jalankan: `npm run dev`
   → Ini akan memantau perubahan dan otomatis membuat `css/style.css`.
5. Buka `index.html` di browser (disarankan pakai extension "Live Server" di VS Code
   supaya halaman auto-refresh setiap kamu simpan perubahan).

## Sebelum submit tugas / deploy
Jalankan `npm run build` — ini membuat `css/style.css` versi final yang sudah diminifikasi
(ukuran lebih kecil, tanpa mode watch).

## Mengganti foto placeholder
Semua foto masih berupa kotak abu-abu bercorak. Cari komentar
`<!-- Ganti div ini dengan: <img ...> -->` di `index.html`, lalu ganti dengan foto asli
kamu yang sudah kamu taruh di folder `assets/`.

## Menambah interaktivitas lain
Semua logika JavaScript ada di `js/app.js`, sudah dipisah per fitur dengan komentar,
jadi tinggal tambahkan fungsi baru di situ mengikuti pola yang sama.
