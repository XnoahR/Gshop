# Gshop API

RESTful API untuk manajemen toko gitar — Express.js + Sequelize + MySQL.

## Setup

```bash
git clone https://github.com/XnoahR/Gshop.git
cd Gshop
npm install
npm start        # berjalan di port 3000
npm test         # 34 unit test (3 suite)
```
---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **ORM:** Sequelize 6
- **Database:** MySQL 8
- **Validasi:** Joi
- **Testing:** Jest + Supertest

---


## Struktur Project

```
src/
  app.js            # Setup Express app
  server.js         # Entry point (koneksi DB + listen)
  controllers/      # Route handlers (Brand, Category, Guitar)
  models/           # Sequelize models + associations
  routes/           # Definisi route
  validations/      # Skema validasi Joi
  utils/db.js       # Konfigurasi database
tests/              # 34 integration test (3 suite)
api/                # File REST Client + test report
```


---

## Endpoints

### --- Brand ---

```
POST /api/brands
```

Membuat brand baru.

**Request:**
```json
{
  "name": "Fender"
}
```

**Response `201`:**
```json
{
  "success": true,
  "message": "Data Brand berhasil dibuat",
  "data": {
    "id": 1,
    "name": "Fender",
    "createdAt": "2026-06-12T09:10:42.000Z",
    "updatedAt": "2026-06-12T09:10:42.000Z"
  }
}
```

---

```
GET /api/brands
```

Mengambil semua brand.

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Brand berhasil diambil",
  "data": [
    {
      "id": 1,
      "name": "Fender",
      "createdAt": "2026-06-12T09:10:42.000Z",
      "updatedAt": "2026-06-12T09:10:42.000Z"
    }
  ]
}
```

---

```
GET /api/brands/:id
```

Mengambil brand berdasarkan ID.

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Brand berhasil diambil",
  "data": {
    "id": 1,
    "name": "Fender",
    "createdAt": "2026-06-12T09:10:42.000Z",
    "updatedAt": "2026-06-12T09:10:42.000Z"
  }
}
```

**Response `404` (data tidak ditemukan):**
```json
{
  "success": false,
  "message": "Data Brand tidak ditemukan",
  "data": null
}
```

---

```
PUT /api/brands/:id
```

Memperbarui brand.

**Request:**
```json
{
  "name": "Gibson"
}
```

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Brand berhasil diperbarui",
  "data": {
    "id": 1,
    "name": "Gibson",
    "createdAt": "2026-06-12T09:10:42.000Z",
    "updatedAt": "2026-06-12T09:10:45.000Z"
  }
}
```

**Response `404` (data tidak ditemukan):**
```json
{
  "success": false,
  "message": "Data Brand tidak ditemukan",
  "data": null
}
```

---

```
DELETE /api/brands/:id
```

Menghapus brand.

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Brand berhasil dihapus",
  "data": null
}
```

**Response `404` (data tidak ditemukan):**
```json
{
  "success": false,
  "message": "Data Brand tidak ditemukan",
  "data": null
}
```

**Response `400` (FK constraint — brand masih dipakai):**
```json
{
  "success": false,
  "message": "Tidak dapat menghapus Brand karena masih digunakan oleh data lain",
  "data": null
}
```

---

### --- Category ---

```
POST /api/categories
```

Membuat kategori baru.

**Request:**
```json
{
  "name": "Electric"
}
```

**Response `201`:**
```json
{
  "success": true,
  "message": "Data Category berhasil dibuat",
  "data": {
    "id": 1,
    "name": "Electric",
    "createdAt": "2026-06-12T09:10:42.000Z",
    "updatedAt": "2026-06-12T09:10:42.000Z"
  }
}
```

---

```
GET /api/categories
```

Mengambil semua kategori.

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Category berhasil diambil",
  "data": [
    {
      "id": 1,
      "name": "Electric",
      "createdAt": "2026-06-12T09:10:42.000Z",
      "updatedAt": "2026-06-12T09:10:42.000Z"
    }
  ]
}
```

---

```
GET /api/categories/:id
```

Mengambil kategori berdasarkan ID.

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Category berhasil diambil",
  "data": {
    "id": 1,
    "name": "Electric",
    "createdAt": "2026-06-12T09:10:42.000Z",
    "updatedAt": "2026-06-12T09:10:42.000Z"
  }
}
```

**Response `404` (data tidak ditemukan):**
```json
{
  "success": false,
  "message": "Data Category tidak ditemukan",
  "data": null
}
```

---

```
PUT /api/categories/:id
```

Memperbarui kategori.

**Request:**
```json
{
  "name": "Acoustic"
}
```

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Category berhasil diperbarui",
  "data": {
    "id": 1,
    "name": "Acoustic",
    "createdAt": "2026-06-12T09:10:42.000Z",
    "updatedAt": "2026-06-12T09:10:45.000Z"
  }
}
```

**Response `404` (data tidak ditemukan):**
```json
{
  "success": false,
  "message": "Data Category tidak ditemukan",
  "data": null
}
```

---

```
DELETE /api/categories/:id
```

Menghapus kategori.

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Category berhasil dihapus",
  "data": null
}
```

**Response `404` (data tidak ditemukan):**
```json
{
  "success": false,
  "message": "Data Category tidak ditemukan",
  "data": null
}
```

**Response `400` (FK constraint — kategori masih dipakai):**
```json
{
  "success": false,
  "message": "Tidak dapat menghapus Category karena masih digunakan oleh data Guitar",
  "data": null
}
```

---

### --- Guitar ---

```
POST /api/guitars
```

Membuat gitar baru.

**Request:**
```json
{
  "name": "Stratocaster",
  "price": 25000000,
  "description": "Classic electric guitar with versatile sound",
  "stock": 10,
  "brandId": 1,
  "categoryId": 1
}
```

**Response `201`:**
```json
{
  "success": true,
  "message": "Data Guitar berhasil dibuat",
  "data": {
    "id": 1,
    "name": "Stratocaster",
    "description": "Classic electric guitar with versatile sound",
    "price": 25000000,
    "stock": 10,
    "brandId": 1,
    "categoryId": 1,
    "createdAt": "2026-06-12T09:10:42.000Z",
    "updatedAt": "2026-06-12T09:10:42.000Z"
  }
}
```

**Response `500` (FK tidak valid — brandId/categoryId tidak ada):**
```json
{
  "success": false,
  "message": "Terjadi kesalahan saat membuat data Guitar",
  "data": null
}
```

---

```
GET /api/guitars
```

Mengambil semua gitar (termasuk data Brand dan Category).

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Gitar berhasil diambil",
  "data": [
    {
      "id": 1,
      "name": "Stratocaster",
      "description": "Classic electric guitar with versatile sound",
      "price": 25000000,
      "stock": 10,
      "brandId": 1,
      "categoryId": 1,
      "createdAt": "2026-06-12T09:10:42.000Z",
      "updatedAt": "2026-06-12T09:10:42.000Z",
      "Brand": { "id": 1, "name": "Fender" },
      "Category": { "id": 1, "name": "Electric" }
    }
  ]
}
```

---

```
GET /api/guitars/:id
```

Mengambil gitar berdasarkan ID (termasuk data Brand dan Category).

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Gitar berhasil diambil",
  "data": {
    "id": 1,
    "name": "Stratocaster",
    "description": "Classic electric guitar with versatile sound",
    "price": 25000000,
    "stock": 10,
    "brandId": 1,
    "categoryId": 1,
    "createdAt": "2026-06-12T09:10:42.000Z",
    "updatedAt": "2026-06-12T09:10:42.000Z",
    "Brand": { "name": "Fender" },
    "Category": { "name": "Electric" }
  }
}
```

**Response `404` (data tidak ditemukan):**
```json
{
  "success": false,
  "message": "Data Gitar tidak ditemukan",
  "data": null
}
```

---

```
PUT /api/guitars/:id
```

Memperbarui gitar. Semua field bersifat opsional — hanya field yang dikirim yang akan diubah.

**Request:**
```json
{
  "price": 22000000,
  "stock": 15
}
```

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Gitar berhasil diperbarui",
  "data": {
    "id": 1,
    "name": "Stratocaster",
    "description": "Classic electric guitar with versatile sound",
    "price": 22000000,
    "stock": 15,
    "brandId": 1,
    "categoryId": 1,
    "createdAt": "2026-06-12T09:10:42.000Z",
    "updatedAt": "2026-06-12T09:10:45.000Z"
  }
}
```

**Response `404` (data tidak ditemukan):**
```json
{
  "success": false,
  "message": "Data Gitar tidak ditemukan",
  "data": null
}
```

---

```
POST /api/guitars/:id/reduce-stock
```

Mengurangi stok gitar (berjalan dalam transaksi dengan row-level lock untuk mencegah race condition).

**Request:**
```json
{
  "quantity": 3
}
```

**Response `200`:**
```json
{
  "success": true,
  "message": "Stok Gitar berhasil dikurangi",
  "data": {
    "id": 1,
    "name": "Stratocaster",
    "description": "Classic electric guitar with versatile sound",
    "price": 22000000,
    "stock": 12,
    "brandId": 1,
    "categoryId": 1,
    "createdAt": "2026-06-12T09:10:42.000Z",
    "updatedAt": "2026-06-12T09:10:46.000Z"
  }
}
```

**Response `400` (stok tidak mencukupi):**
```json
{
  "success": false,
  "message": "Stok tidak cukup",
  "data": null
}
```

**Response `404` (data tidak ditemukan):**
```json
{
  "success": false,
  "message": "Data Gitar tidak ditemukan",
  "data": null
}
```

---

```
DELETE /api/guitars/:id
```

Menghapus gitar.

**Response `200`:**
```json
{
  "success": true,
  "message": "Data Gitar berhasil dihapus",
  "data": null
}
```

**Response `404` (data tidak ditemukan):**
```json
{
  "success": false,
  "message": "Data Gitar tidak ditemukan",
  "data": null
}
```

---

### --- Health ---

```
GET /health
```

Pengecekan server.

**Response `200`:**
```
Tes server
```

---

## Format Response

Semua endpoint resource mengikuti struktur envelope:

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `success` | boolean | `true` jika berhasil, `false` jika gagal |
| `message` | string | Pesan dalam bahasa Indonesia |
| `data` | object / array / null | Data response, atau `null` saat error/delete |

Kode status: `200` (berhasil/hapus), `201` (berhasil dibuat), `400` (validasi/FK error), `404` (data tidak ditemukan), `500` (server error).


