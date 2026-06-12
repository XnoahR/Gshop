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
