import { Category } from "../models/index.js";

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await Category.create({ name });
    res.status(201).json({
      success: true,
      message: "Data Category berhasil dibuat",
      data: newCategory,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat membuat data Category:", error);

    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({
        success: false,
        message: "Nama Category sudah digunakan",
        data: null,
      });
    }

    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat membuat data Category",
      data: null,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({
      success: true,
      message: "Data Category berhasil diambil",
      data: categories,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data Category:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil data Category",
      data: null,
    });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Data Category tidak ditemukan",
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: "Data Category berhasil diambil",
      data: category,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data Category:", error);

    if (error.name === "SequelizeDatabaseError") {
      return res.status(400).json({
        success: false,
        message: "Format ID tidak valid",
        data: null,
      });
    }

    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil data Category",
      data: null,
    });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Data Category tidak ditemukan",
        data: null,
      });
    }
    category.name = name;
    await category.save();
    res.status(200).json({
      success: true,
      message: "Data Category berhasil diperbarui",
      data: category,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat memperbarui data Category:", error);

    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({
        success: false,
        message: "Nama Category sudah digunakan",
        data: null,
      });
    }

    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat memperbarui data Category",
      data: null,
    });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Data Category tidak ditemukan",
        data: null,
      });
    }
    await category.destroy();
    res.status(200).json({
      success: true,
      message: "Data Category berhasil dihapus",
      data: null,
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat menghapus data Category:", error);

    if (error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({
        success: false,
        message:
          "Tidak dapat menghapus Category karena masih digunakan oleh data Guitar",
        data: null,
      });
    }

    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat menghapus data Category",
      data: null,
    });
  }
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
