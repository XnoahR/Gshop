import Joi from "joi";

const createCategorySchema = Joi.object({
  name: Joi.string().trim().min(3).max(50).required().messages({
    "string.base": "Category name must be a string",
    "string.empty": "Category name is required",
    "string.min": "Category name must be at least 3 characters long",
    "string.max": "Category name must be at most 50 characters long",
    "any.required": "Category name is required",
  }),
});

const updateCategorySchema = Joi.object({
  name: Joi.string().trim().min(3).max(50).messages({
    "string.base": "Category name must be a string",
    "string.empty": "Category name cannot be empty",
    "string.min": "Category name must be at least 3 characters long",
    "string.max": "Category name must be at most 50 characters long",
  }),
});

export { createCategorySchema, updateCategorySchema };
