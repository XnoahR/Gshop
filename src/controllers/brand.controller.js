import { Brand } from "../models/index.js";

const createBrand = async (req, res) => {
  const { name } = req.body;
  try {
    const newBrand = await Brand.create({ name });
    res.status(201).json({
      success: true,
      message: "Data Brand berhasil dibuat",
      data: newBrand,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat membuat data Brand:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat membuat data Brand",
      data: null,
    });
  }
};

const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.status(200).json({
      success: true,
      message: "Data Brand berhasil diambil",
      data: brands,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data Brand:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil data Brand",
      data: null,
    });
  }
};

const getBrandById = async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Data Brand tidak ditemukan",
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: "Data Brand berhasil diambil",
      data: brand,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data Brand:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil data Brand",
      data: null,
    });
  }
};

const updateBrand = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Data Brand tidak ditemukan",
        data: null,
      });
    }
    brand.name = name || brand.name;
    await brand.save();
    res.status(200).json({
      success: true,
      message: "Data Brand berhasil diperbarui",
      data: brand,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat memperbarui data Brand:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat memperbarui data Brand",
      data: null,
    });
  }
};

const deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Data Brand tidak ditemukan",
        data: null,
      });
    }
    await brand.destroy();
    res.status(200).json({
      success: true,
      message: "Data Brand berhasil dihapus",
      data: null,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat menghapus data Brand:", error);

    if (error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({
        success: false,
        message:
          "Tidak dapat menghapus Brand karena masih digunakan oleh data lain",
        data: null,
      });
    }

    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat menghapus data Brand",
      data: null,
    });
  }
};

export { createBrand, getAllBrands, getBrandById, updateBrand, deleteBrand };
