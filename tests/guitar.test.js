import request from "supertest";
import app from "../src/app.js";
import sequelize from "../src/utils/db.js";
import { Brand, Category, Guitar } from "../src/models/index.js";

let brandId;
let categoryId;
let guitarId;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  const brand = await Brand.create({ name: "Fender" });
  brandId = brand.id;
  const category = await Category.create({ name: "Electric" });
  categoryId = category.id;
});

afterAll(async () => {
  await sequelize.close();
});

describe("Guitar API", () => {
  describe("POST /api/guitars", () => {
    it("should create a new guitar", async () => {
      const res = await request(app).post("/api/guitars").send({
        name: "Stratocaster",
        price: 25000000,
        description: "Classic electric guitar with versatile sound",
        stock: 10,
        brandId,
        categoryId,
      });
      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Stratocaster");
      expect(res.body.data.price).toBe(25000000);
      expect(res.body.data.stock).toBe(10);
      guitarId = res.body.data.id;
    });

    it("should fail with invalid brandId", async () => {
      const res = await request(app).post("/api/guitars").send({
        name: "Telecaster",
        price: 20000000,
        description: "Another classic",
        stock: 5,
        brandId: 9999,
        categoryId,
      });
      expect(res.status).toBe(500);
      expect(res.body.success).toBe(false);
    });

    it("should fail when name is empty", async () => {
      const res = await request(app).post("/api/guitars").send({
        name: "",
        price: 10000000,
        description: "A nice guitar description",
        stock: 5,
        brandId,
        categoryId,
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("Guitar name is required");
    });

    it("should fail when name is too short", async () => {
      const res = await request(app).post("/api/guitars").send({
        name: "Ab",
        price: 10000000,
        description: "A nice guitar description",
        stock: 5,
        brandId,
        categoryId,
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("at least 3 characters");
    });

    it("should fail when price is negative", async () => {
      const res = await request(app).post("/api/guitars").send({
        name: "Telecaster",
        price: -1000,
        description: "A nice guitar description",
        stock: 5,
        brandId,
        categoryId,
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("positive number");
    });

    it("should fail when description is too short", async () => {
      const res = await request(app).post("/api/guitars").send({
        name: "Telecaster",
        price: 10000000,
        description: "Short",
        stock: 5,
        brandId,
        categoryId,
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("at least 10 characters");
    });

    it("should fail when stock is negative", async () => {
      const res = await request(app).post("/api/guitars").send({
        name: "Telecaster",
        price: 10000000,
        description: "A nice guitar description",
        stock: -5,
        brandId,
        categoryId,
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("Stock cannot be negative");
    });

    it("should fail when brandId is missing", async () => {
      const res = await request(app).post("/api/guitars").send({
        name: "Telecaster",
        price: 10000000,
        description: "A nice guitar description",
        stock: 5,
        categoryId,
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("Brand ID is required");
    });
  });

  describe("GET /api/guitars", () => {
    it("should return all guitars with brand and category", async () => {
      const res = await request(app).get("/api/guitars");
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThan(0);
      const guitar = res.body.data[0];
      expect(guitar).toHaveProperty("Brand");
      expect(guitar).toHaveProperty("Category");
      expect(guitar.Brand).toHaveProperty("name");
      expect(guitar.Category).toHaveProperty("name");
    });
  });

  describe("GET /api/guitars/:id", () => {
    it("should return a guitar by id", async () => {
      const res = await request(app).get(`/api/guitars/${guitarId}`);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Stratocaster");
      expect(res.body.data).toHaveProperty("Brand");
      expect(res.body.data).toHaveProperty("Category");
    });

    it("should return 404 for non-existent guitar", async () => {
      const res = await request(app).get("/api/guitars/9999");
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe("Data Gitar tidak ditemukan");
    });
  });

  describe("PUT /api/guitars/:id", () => {
    it("should update a guitar", async () => {
      const res = await request(app).put(`/api/guitars/${guitarId}`).send({
        price: 22000000,
        stock: 15,
      });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.price).toBe(22000000);
      expect(res.body.data.stock).toBe(15);
    });

    it("should return 404 when updating non-existent guitar", async () => {
      const res = await request(app).put("/api/guitars/9999").send({
        price: 1000000,
      });
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });

    it("should fail when updating with negative price", async () => {
      const res = await request(app).put(`/api/guitars/${guitarId}`).send({
        price: -1,
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("Price must be a positive number");
    });
  });

  describe("POST /api/guitars/:id/reduce-stock", () => {
    it("should reduce guitar stock", async () => {
      const res = await request(app)
        .post(`/api/guitars/${guitarId}/reduce-stock`)
        .send({ quantity: 3 });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.stock).toBe(12);
    });

    it("should fail when stock is insufficient", async () => {
      const res = await request(app)
        .post(`/api/guitars/${guitarId}/reduce-stock`)
        .send({ quantity: 999 });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe("Stok tidak cukup");
    });

    it("should fail when quantity is negative", async () => {
      const res = await request(app)
        .post(`/api/guitars/${guitarId}/reduce-stock`)
        .send({ quantity: -3 });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("Quantity must be at least 1");
    });

    it("should fail when quantity is missing", async () => {
      const res = await request(app)
        .post(`/api/guitars/${guitarId}/reduce-stock`)
        .send({});
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("Quantity is required");
    });

    it("should return 404 for non-existent guitar", async () => {
      const res = await request(app)
        .post("/api/guitars/9999/reduce-stock")
        .send({ quantity: 1 });
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });
  });

  describe("DELETE /api/guitars/:id", () => {
    it("should return 404 when deleting non-existent guitar", async () => {
      const res = await request(app).delete("/api/guitars/9999");
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });

    it("should delete a guitar", async () => {
      const res = await request(app).delete(`/api/guitars/${guitarId}`);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Data Gitar berhasil dihapus");
    });

    it("should confirm guitar is deleted", async () => {
      const res = await request(app).get(`/api/guitars/${guitarId}`);
      expect(res.status).toBe(404);
    });
  });

  describe("Brand FK constraint", () => {
    it("should fail to delete brand that has guitars", async () => {
      const brand = await Brand.create({ name: "Gibson" });
      const guitar = await Guitar.create({
        name: "Les Paul",
        price: 30000000,
        description: "Rock legend guitar",
        stock: 5,
        brandId: brand.id,
        categoryId,
      });

      const res = await request(app).delete(`/api/brands/${brand.id}`);
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("Tidak dapat menghapus Brand");

      await guitar.destroy();
      await brand.destroy();
    });
  });
});
