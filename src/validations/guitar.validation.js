import Joi from "joi";

const createGuitarSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).required().messages({
    "string.base": "Guitar name must be a string",
    "string.empty": "Guitar name is required",
    "string.min": "Guitar name must be at least 3 characters long",
    "string.max": "Guitar name must be at most 100 characters long",
    "any.required": "Guitar name is required",
  }),
  description: Joi.string().trim().min(10).required().messages({
    "string.base": "Description must be a string",
    "string.empty": "Description is required",
    "string.min": "Description must be at least 10 characters long",
    "any.required": "Description is required",
  }),
  price: Joi.number().positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be a positive number",
    "any.required": "Price is required",
  }),
  stock: Joi.number().integer().min(0).required().messages({
    "number.base": "Stock must be a number",
    "number.integer": "Stock must be an integer",
    "number.min": "Stock cannot be negative",
    "any.required": "Stock is required",
  }),
  brandId: Joi.number().integer().positive().required().messages({
    "number.base": "Brand ID must be a number",
    "number.integer": "Brand ID must be an integer",
    "number.positive": "Brand ID must be a positive number",
    "any.required": "Brand ID is required",
  }),
  categoryId: Joi.number().integer().positive().required().messages({
    "number.base": "Category ID must be a number",
    "number.integer": "Category ID must be an integer",
    "number.positive": "Category ID must be a positive number",
    "any.required": "Category ID is required",
  }),
});

const updateGuitarSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).messages({
    "string.base": "Guitar name must be a string",
    "string.empty": "Guitar name cannot be empty",
    "string.min": "Guitar name must be at least 3 characters long",
    "string.max": "Guitar name must be at most 100 characters long",
  }),
  description: Joi.string().trim().min(10).messages({
    "string.base": "Description must be a string",
    "string.empty": "Description cannot be empty",
    "string.min": "Description must be at least 10 characters long",
  }),
  price: Joi.number().positive().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be a positive number",
  }),
  stock: Joi.number().integer().min(0).messages({
    "number.base": "Stock must be a number",
    "number.integer": "Stock must be an integer",
    "number.min": "Stock cannot be negative",
  }),
  brandId: Joi.number().integer().positive().messages({
    "number.base": "Brand ID must be a number",
    "number.integer": "Brand ID must be an integer",
    "number.positive": "Brand ID must be a positive number",
  }),
  categoryId: Joi.number().integer().positive().messages({
    "number.base": "Category ID must be a number",
    "number.integer": "Category ID must be an integer",
    "number.positive": "Category ID must be a positive number",
  }),
});

export { createGuitarSchema, updateGuitarSchema };
