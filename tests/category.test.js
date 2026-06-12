import request from "supertest";
import app from "../src/app.js";
import sequelize from "../src/utils/db.js";
import { Category } from "../src/models/index.js";

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Category API", () => {
  let categoryId;

  describe("POST /api/categories", () => {
    it("should create a new category", async () => {
      const res = await request(app).post("/api/categories").send({
        name: "Electric",
      });
      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Electric");
      expect(res.body.data).toHaveProperty("id");
      categoryId = res.body.data.id;
    });

    it("should fail to create category with duplicate name", async () => {
      const res = await request(app).post("/api/categories").send({
        name: "Electric",
      });
      expect(res.status).toBe(409);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe("Nama Category sudah digunakan");
    });

    it("should fail when name is empty", async () => {
      const res = await request(app).post("/api/categories").send({
        name: "",
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("Category name is required");
    });

    it("should fail when name is too short", async () => {
      const res = await request(app).post("/api/categories").send({
        name: "Ab",
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("at least 3 characters");
    });
  });

  describe("GET /api/categories", () => {
    it("should return all categories", async () => {
      const res = await request(app).get("/api/categories");
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/categories/:id", () => {
    it("should return a category by id", async () => {
      const res = await request(app).get(`/api/categories/${categoryId}`);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Electric");
    });

    it("should return 404 for non-existent category", async () => {
      const res = await request(app).get("/api/categories/9999");
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe("Data Category tidak ditemukan");
    });
  });

  describe("PUT /api/categories/:id", () => {
    it("should update a category", async () => {
      const res = await request(app).put(`/api/categories/${categoryId}`).send({
        name: "Acoustic",
      });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Acoustic");
    });

    it("should return 404 when updating non-existent category", async () => {
      const res = await request(app).put("/api/categories/9999").send({
        name: "Bass",
      });
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });

    it("should fail when updating with empty name", async () => {
      const res = await request(app).put(`/api/categories/${categoryId}`).send({
        name: "",
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain("Category name cannot be empty");
    });
  });

  describe("DELETE /api/categories/:id", () => {
    it("should return 404 when deleting non-existent category", async () => {
      const res = await request(app).delete("/api/categories/9999");
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });

    it("should delete a category", async () => {
      const res = await request(app).delete(`/api/categories/${categoryId}`);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Data Category berhasil dihapus");
    });

    it("should confirm category is deleted", async () => {
      const res = await request(app).get(`/api/categories/${categoryId}`);
      expect(res.status).toBe(404);
    });
  });
});
