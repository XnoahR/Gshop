# Gshop API Test Report

## Summary

| | Passed | Failed | Total |
|---|---|---|---|---|
| Brand | 13 | 0 | 13 |
| Category | 13 | 0 | 13 |
| Guitar | 21 | 0 | 21 |
| **Total** | **47** | **0** | **47** |

---

## Health Check

### GET /health
**Request:**
```
GET /health
```
**Response 200:**
```
Tes server
```

---

## Brand API

### POST /api/brands — Create Brand

**Request:**
```json
{
  "name": "Fender"
}
```
**Response 201:**
```json
{
  "success": true,
  "message": "Data Brand berhasil dibuat",
  "data": {
    "id": 1,
    "name": "Fender",
    "updatedAt": "2026-06-12T09:10:42.000Z",
    "createdAt": "2026-06-12T09:10:42.000Z"
  }
}
```

### POST /api/brands — Duplicate Name

**Request:**
```json
{
  "name": "Fender"
}
```
**Response 500:**
```json
{
  "success": false,
  "message": "Terjadi kesalahan saat membuat data Brand",
  "data": null
}
```

### POST /api/brands — Name Empty (Validation)

**Request:**
```json
{
  "name": ""
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "\"name\" is not allowed to be empty",
  "data": null
}
```

### POST /api/brands — Name Too Short (Validation)

**Request:**
```json
{
  "name": "Ab"
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Brand name must be at least 3 characters long",
  "data": null
}
```

### GET /api/brands — Get All Brands

**Request:**
```
GET /api/brands
```
**Response 200:**
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

### GET /api/brands/:id — Get Brand by ID

**Request:**
```
GET /api/brands/1
```
**Response 200:**
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

### GET /api/brands/:id — Not Found

**Request:**
```
GET /api/brands/9999
```
**Response 404:**
```json
{
  "success": false,
  "message": "Data Brand tidak ditemukan",
  "data": null
}
```

### PUT /api/brands/:id — Update Brand

**Request:**
```json
{
  "name": "Gibson"
}
```
**Response 200:**
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

### PUT /api/brands/:id — Update Not Found

**Request:**
```json
{
  "name": "Yamaha"
}
```
**Response 404:**
```json
{
  "success": false,
  "message": "Data Brand tidak ditemukan",
  "data": null
}
```

### PUT /api/brands/:id — Empty Name (Validation)

**Request:**
```json
{
  "name": ""
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Brand name cannot be empty",
  "data": null
}
```

### DELETE /api/brands/:id — Delete Brand

**Request:**
```
DELETE /api/brands/1
```
**Response 200:**
```json
{
  "success": true,
  "message": "Data Brand berhasil dihapus",
  "data": null
}
```

### DELETE /api/brands/:id — Delete Not Found

**Request:**
```
DELETE /api/brands/9999
```
**Response 404:**
```json
{
  "success": false,
  "message": "Data Brand tidak ditemukan",
  "data": null
}
```

---

## Category API

### POST /api/categories — Create Category

**Request:**
```json
{
  "name": "Electric"
}
```
**Response 201:**
```json
{
  "success": true,
  "message": "Data Category berhasil dibuat",
  "data": {
    "id": 1,
    "name": "Electric",
    "updatedAt": "2026-06-12T09:10:42.000Z",
    "createdAt": "2026-06-12T09:10:42.000Z"
  }
}
```

### POST /api/categories — Duplicate Name

**Request:**
```json
{
  "name": "Electric"
}
```
**Response 500:**
```json
{
  "success": false,
  "message": "Terjadi kesalahan saat membuat data Category",
  "data": null
}
```

### POST /api/categories — Name Empty (Validation)

**Request:**
```json
{
  "name": ""
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "\"name\" is not allowed to be empty",
  "data": null
}
```

### POST /api/categories — Name Too Short (Validation)

**Request:**
```json
{
  "name": "Ab"
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Category name must be at least 3 characters long",
  "data": null
}
```

### GET /api/categories — Get All Categories

**Request:**
```
GET /api/categories
```
**Response 200:**
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

### GET /api/categories/:id — Get Category by ID

**Request:**
```
GET /api/categories/1
```
**Response 200:**
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

### GET /api/categories/:id — Not Found

**Request:**
```
GET /api/categories/9999
```
**Response 404:**
```json
{
  "success": false,
  "message": "Data Category tidak ditemukan",
  "data": null
}
```

### PUT /api/categories/:id — Update Category

**Request:**
```json
{
  "name": "Acoustic"
}
```
**Response 200:**
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

### PUT /api/categories/:id — Update Not Found

**Request:**
```json
{
  "name": "Bass"
}
```
**Response 404:**
```json
{
  "success": false,
  "message": "Data Category tidak ditemukan",
  "data": null
}
```

### PUT /api/categories/:id — Empty Name (Validation)

**Request:**
```json
{
  "name": ""
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Category name cannot be empty",
  "data": null
}
```

### DELETE /api/categories/:id — Delete Category

**Request:**
```
DELETE /api/categories/1
```
**Response 200:**
```json
{
  "success": true,
  "message": "Data Category berhasil dihapus",
  "data": null
}
```

### DELETE /api/categories/:id — Delete Not Found

**Request:**
```
DELETE /api/categories/9999
```
**Response 404:**
```json
{
  "success": false,
  "message": "Data Category tidak ditemukan",
  "data": null
}
```

---

## Guitar API

### POST /api/guitars — Create Guitar

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
**Response 201:**
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
    "updatedAt": "2026-06-12T09:10:42.000Z",
    "createdAt": "2026-06-12T09:10:42.000Z"
  }
}
```

### POST /api/guitars — Invalid brandId (FK Error)

**Request:**
```json
{
  "name": "Telecaster",
  "price": 20000000,
  "description": "Another classic",
  "stock": 5,
  "brandId": 9999,
  "categoryId": 1
}
```
**Response 500:**
```json
{
  "success": false,
  "message": "Terjadi kesalahan saat membuat data Guitar",
  "data": null
}
```

### POST /api/guitars — Name Empty (Validation)

**Request:**
```json
{
  "name": "",
  "price": 10000000,
  "description": "A nice guitar description",
  "stock": 5,
  "brandId": 1,
  "categoryId": 1
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "\"name\" is not allowed to be empty",
  "data": null
}
```

### POST /api/guitars — Name Too Short (Validation)

**Request:**
```json
{
  "name": "Ab",
  "price": 10000000,
  "description": "A nice guitar description",
  "stock": 5,
  "brandId": 1,
  "categoryId": 1
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Guitar name must be at least 3 characters long",
  "data": null
}
```

### POST /api/guitars — Price Negative (Validation)

**Request:**
```json
{
  "name": "Telecaster",
  "price": -1000,
  "description": "A nice guitar description",
  "stock": 5,
  "brandId": 1,
  "categoryId": 1
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Price must be a positive number",
  "data": null
}
```

### POST /api/guitars — Description Too Short (Validation)

**Request:**
```json
{
  "name": "Telecaster",
  "price": 10000000,
  "description": "Short",
  "stock": 5,
  "brandId": 1,
  "categoryId": 1
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Description must be at least 10 characters long",
  "data": null
}
```

### POST /api/guitars — Stock Negative (Validation)

**Request:**
```json
{
  "name": "Telecaster",
  "price": 10000000,
  "description": "A nice guitar description",
  "stock": -5,
  "brandId": 1,
  "categoryId": 1
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Stock cannot be negative",
  "data": null
}
```

### POST /api/guitars — Brand ID Missing (Validation)

**Request:**
```json
{
  "name": "Telecaster",
  "price": 10000000,
  "description": "A nice guitar description",
  "stock": 5,
  "categoryId": 1
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Brand ID is required",
  "data": null
}
```

### GET /api/guitars — Get All (with Brand & Category)

**Request:**
```
GET /api/guitars
```
**Response 200:**
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
      "Brand": {
        "id": 1,
        "name": "Fender"
      },
      "Category": {
        "id": 1,
        "name": "Electric"
      }
    }
  ]
}
```

### GET /api/guitars/:id — Get by ID (with relations)

**Request:**
```
GET /api/guitars/1
```
**Response 200:**
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
    "Brand": {
      "name": "Fender"
    },
    "Category": {
      "name": "Electric"
    }
  }
}
```

### GET /api/guitars/:id — Not Found

**Request:**
```
GET /api/guitars/9999
```
**Response 404:**
```json
{
  "success": false,
  "message": "Data Gitar tidak ditemukan",
  "data": null
}
```

### PUT /api/guitars/:id — Update Guitar

**Request:**
```json
{
  "price": 22000000,
  "stock": 15
}
```
**Response 200:**
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

### PUT /api/guitars/:id — Update Not Found

**Request:**
```json
{
  "price": 1000000
}
```
**Response 404:**
```json
{
  "success": false,
  "message": "Data Gitar tidak ditemukan",
  "data": null
}
```

### PUT /api/guitars/:id — Price Negative (Validation)

**Request:**
```json
{
  "price": -1
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Price must be a positive number",
  "data": null
}
```

### POST /api/guitars/:id/reduce-stock — Reduce Stock

**Request:**
```json
{
  "quantity": 3
}
```
**Response 200:**
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

### POST /api/guitars/:id/reduce-stock — Insufficient Stock

**Request:**
```json
{
  "quantity": 999
}
```
**Response 400:**
```json
{
  "success": false,
  "message": "Stok tidak cukup",
  "data": null
}
```

### POST /api/guitars/:id/reduce-stock — Guitar Not Found

**Request:**
```json
{
  "quantity": 1
}
```
**Response 404:**
```json
{
  "success": false,
  "message": "Data Gitar tidak ditemukan",
  "data": null
}
```

### DELETE /api/guitars/:id — Delete Guitar

**Request:**
```
DELETE /api/guitars/1
```
**Response 200:**
```json
{
  "success": true,
  "message": "Data Gitar berhasil dihapus",
  "data": null
}
```

### DELETE /api/guitars/:id — Delete Not Found

**Request:**
```
DELETE /api/guitars/9999
```
**Response 404:**
```json
{
  "success": false,
  "message": "Data Gitar tidak ditemukan",
  "data": null
}
```

---

## Edge Cases

### FK Constraint — Delete Brand that has Guitars

**Request:**
```
DELETE /api/brands/2
```
**Response 400:**
```json
{
  "success": false,
  "message": "Tidak dapat menghapus Brand karena masih digunakan oleh data lain",
  "data": null
}
```
