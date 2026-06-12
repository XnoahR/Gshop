import { Guitar, Brand, Category } from "../models/index.js";
import sequelize from "../utils/db.js";

const createGuitar = async (req, res) => {
  const { name, price, description, stock, brandId, categoryId } = req.body;
  try {
    const newGuitar = await Guitar.create({
      name,
      price,
      description,
      stock,
      brandId,
      categoryId,
    });
    res.status(201).json({
      success: true,
      message: "Data Guitar berhasil dibuat",
      data: newGuitar,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat membuat data Guitar:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat membuat data Guitar",
      data: null,
    });
  }
};

const getAllGuitars = async (req, res) => {
  try {
    const guitars = await Guitar.findAll({
      include: [
        { model: Brand, attributes: ["name", "id"] },
        { model: Category, attributes: ["name", "id"] },
      ],
    });
    res.status(200).json({
      success: true,
      message: "Data Gitar berhasil diambil",
      data: guitars,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data Gitar:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil data Gitar",
      data: null,
    });
  }
};

const getGuitarById = async (req, res) => {
  const { id } = req.params;
  try {
    const guitar = await Guitar.findByPk(id, {
      include: [
        { model: Brand, attributes: ["name"] },
        { model: Category, attributes: ["name"] },
      ],
    });
    if (!guitar) {
      return res.status(404).json({
        success: false,
        message: "Data Gitar tidak ditemukan",
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: "Data Gitar berhasil diambil",
      data: guitar,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data Gitar:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil data Gitar",
      data: null,
    });
  }
};

const updateGuitar = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, stock, brandId, categoryId } = req.body;
  try {
    const guitar = await Guitar.findByPk(id);
    if (!guitar) {
      return res.status(404).json({
        success: false,
        message: "Data Gitar tidak ditemukan",
        data: null,
      });
    }
    await guitar.update({
      name,
      price,
      description,
      stock,
      brandId,
      categoryId,
    });
    res.status(200).json({
      success: true,
      message: "Data Gitar berhasil diperbarui",
      data: guitar,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat memperbarui data Gitar:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat memperbarui data Gitar",
      data: null,
    });
  }
};

const reduceStockGuitar = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    await sequelize.transaction(async (t) => {
      const guitar = await Guitar.findByPk(id, {
        transaction: t,
        lock: t.LOCK.UPDATE,
      });

      if (!guitar) {
        return res.status(404).json({
          success: false,
          message: "Data Gitar tidak ditemukan",
          data: null,
        });
      }
      if (guitar.stock < quantity) {
        return res.status(400).json({
          success: false,
          message: "Stok tidak cukup",
          data: null,
        });
      }
      guitar.stock -= quantity;
      await guitar.save({ transaction: t });
      res.status(200).json({
        success: true,
        message: "Stok Gitar berhasil dikurangi",
        data: guitar,
      });
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat mengurangi stok Gitar:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengurangi stok Gitar",
      data: null,
    });
  }
};

const deleteGuitar = async (req, res) => {
  const { id } = req.params;
  try {
    const guitar = await Guitar.findByPk(id);
    if (!guitar) {
      return res.status(404).json({
        success: false,
        message: "Data Gitar tidak ditemukan",
        data: null,
      });
    }
    await guitar.destroy();
    res.status(200).json({
      success: true,
      message: "Data Gitar berhasil dihapus",
      data: null,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat menghapus data Gitar:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat menghapus data Gitar",
      data: null,
    });
  }
};

export {
  createGuitar,
  getAllGuitars,
  getGuitarById,
  updateGuitar,
  deleteGuitar,
  reduceStockGuitar,
};
