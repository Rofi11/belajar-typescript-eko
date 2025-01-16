Belajar dari Udemy Typescript belajar dari 0 tentang Typescript

> cara menjalankan unit test
> npm test (menjlankan unit test menggunakan javasscipt)

> cara kompile ke js
> npx tsc (menjalankan unit test menjalankan tyepscript) --> prefer pakai yang ini

> setting tempat kompil di tsconfig.json
> di part "outDir": "dist/"

> setting include dan exclude
> ditambahkan secara manual, contoh ada di tsconfig.json
> module utk selain api di tsconfig.json ES6, utk yang api pakai commonJS
> kebutuhan di sesuaikan utk latihan biasa atau utk latihan api

set-up project api (sampai jalan)

- create env.file

```
DATABASE_URL="mysql://root:password@localhost:3306/belajar_typescript_restfull_api"
```

```shell
npm install --> install semua kebutuhan

npx prisma migrate dev --> migrate database

npx prisma generate --> generate database

npx tsc --> compile ke javascript atau npm run build (harus setting dulu di package.json)

node dist/src-application/main.js -> jalankan main.js sesaui folder nya atau npm run start (harus setting dulu di package.json)
```
