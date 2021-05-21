Lihat harga jual dan beli Bitcoin hari ini, konversikan dari Rupiah atau ke Rupiah juga.

Untuk demo cek di sini: [https://bitcoin-fe-andika.herokuapp.com](https://bitcoin-fe-andika.herokuapp.com/)

## Stack

Aplikasi [Laravel](https://laravel.com) simpel (versi 7.x) dengan View/frontend [React JS](https://reactjs.org/), dibantu [Inertia.js](https://inertiajs.com/) untuk [mengintegrasikan](https://reinink.ca/articles/introducing-inertia-js) routing dan controller Laravel dengan aplikasi single-page React, sehingga Laravel bisa digunakan sebagai framework monolitik seperti biasa dan tidak perlu menyediakan API khusus di backend.

Sumber data dari: [blockchain.com/explorer](https://www.blockchain.com/explorer).

## Setup development

```
git clone https://github.com/sakitkepala/FrontEnd-Bitcoin-AndikaPriyotamaD.git

// Install dependensi projek (Laravel 7.x, PHP 7.2)
composer install

// Install & build asset JS & CSS untuk environment development
yarn install && yarn dev

// Jalankan server Laravel & front-end
php artisan server
yarn watch // atau `npm run watch`
```

Untuk front-end, projek ini menggunakan [package manager Yarn](https://yarnpkg.com/), tidak NPM seperti default dari Laravel, tapi tetap bisa menggunakan perintah `npm install && npm run dev`, bila Yarn terinstall di mesin. Bila tidak berhasil, hapus file `yarn.lock` lalu update `script` di `package.json` menjadi kurang-lebih seperti berikut untuk bisa menggunakan NPM:

```
// Ganti perintah `yarn` dengan perintah `npm run`...
{
    ...
    "scripts": {
        "dev": "npm run development",
        "watch": "npm run development -- --watch",
        "prod": "npm run production",
        ...
    },
    ...
}
```

## ☕ 👋🏼
