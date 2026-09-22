# React Contact App

Sebuah aplikasi daftar kontak sederhana yang dibangun menggunakan **React** dan **Vite**. Proyek ini dibuat sebagai sarana pembelajaran untuk memahami konsep dasar React, khususnya mengenai *Component-Based Architecture* dan modularisasi antarmuka pengguna (UI).

## Fitur & Pembelajaran Utama
- **Modularisasi Komponen:** Memecah antarmuka utama menjadi potongan komponen kecil yang *reusable* (seperti `ContactList`, `ContactItem`, dan `ContactItemBody`)[cite: 3].
- **List Rendering:** Me-render kumpulan data array JavaScript menjadi elemen daftar (list) pada DOM[cite: 3].
- **Local Asset Management:** Menampilkan aset gambar secara lokal untuk avatar karakter (Kira, Mob, Saitama)[cite: 3].

## Struktur Direktori

Proyek ini disusun dengan struktur berikut:

```text
src/
├── components/          # Kumpulan komponen UI React
│   ├── ContactApp.jsx       # Komponen induk (Container)
│   ├── ContactList.jsx      # Merender daftar kontak
│   ├── ContactItem.jsx      # Wrapper untuk setiap item kontak
│   ├── ContactItemBody.jsx  # Menampilkan nama dan detail
│   └── ContactItemImage.jsx # Menampilkan avatar
├── styles/css/
│   └── style.css        # Custom styling aplikasi
├── utils/
│   └── data.js          # Dummy data kontak
└── index.jsx            # Entry point aplikasi React

```

Cara Menjalankan Proyek (Local Development)
Pastikan kamu sudah menginstal Node.js di sistem kamu.

Clone repository ini: 
git clone [https://github.com/HusniFatah/belajar-reactjs.git](https://github.com/HusniFatah/belajar-reactjs.git)

Masuk ke dalam direktori proyek
cd contact-app
Instal semua dependencies

npm install
Jalankan local development server

npm run dev
Buka http://localhost:5173/ (atau port lain yang tertera di terminal) di browser kamu.

Teknologi yang Digunakan
- React

- Vite

- Vanilla CSS

Dibuat oleh Husni Fatah - Latihan ReactJS