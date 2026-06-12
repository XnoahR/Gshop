import request from "supertest";
import app from "../src/app.js";
import sequelize from "../src/utils/db.js";
import { Brand } from "../src/models/index.js";

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Brand API", () => {
  let brandId;

  describe("POST /api/brands", () => {
    it("should create a new brand", async () => {
      const res = await request(app).post("/api/brands").send({
        name: "Fender",
      });
      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Fender");
      expect(res.body.data).toHaveProperty("id");
      brandId = res.body.data.id;
    });

    it("should fail to create brand with duplicate name", async () => {
      const res = await request(app).post("/api/brands").send({
        name: "Fender",
      });
      expect(res.status).toBe(500);
      expect(res.body.success).toBe(false);
    });
  });

  describe("GET /api/brands", () => {
    it("should return all brands", async () => {
      const res = await request(app).get("/api/brands");
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/brands/:id", () => {
    it("should return a brand by id", async () => {
      const res = await request(app).get(`/api/brands/${brandId}`);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Fender");
    });

    it("should return 404 for non-existent brand", async () => {
      const res = await request(app).get("/api/brands/9999");
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe("Data Brand tidak ditemukan");
    });
  });

  describe("PUT /api/brands/:id", () => {
    it("should update a brand", async () => {
      const res = await request(app).put(`/api/brands/${brandId}`).send({
        name: "Gibson",
      });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Gibson");
    });

    it("should return 404 when updating non-existent brand", async () => {
      const res = await request(app).put("/api/brands/9999").send({
        name: "Yamaha",
      });
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });
  });

  describe("DELETE /api/brands/:id", () => {
    it("should return 404 when deleting non-existent brand", async () => {
      const res = await request(app).delete("/api/brands/9999");
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });

    it("should delete a brand", async () => {
      const res = await request(app).delete(`/api/brands/${brandId}`);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Data Brand berhasil dihapus");
    });

    it("should confirm brand is deleted", async () => {
      const res = await request(app).get(`/api/brands/${brandId}`);
      expect(res.status).toBe(404);
    });
  });
});
