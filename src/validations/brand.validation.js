import Joi from "joi";

const createBrandSchema = Joi.object({
  name: Joi.string().trim().min(3).max(50).required().messages({
    "string.base": "Brand name must be a string",
    "string.empty": "Brand name is required",
    "string.min": "Brand name must be at least 3 characters long",
    "string.max": "Brand name must be at most 50 characters long",
    "any.required": "Brand name is required",
  }),
});

const updateBrandSchema = Joi.object({
    name: Joi.string().trim().min(3).max(50).messages({
        "string.base": "Brand name must be a string",
        "string.empty": "Brand name cannot be empty",
        "string.min": "Brand name must be at least 3 characters long",
        "string.max": "Brand name must be at most 50 characters long",
    }),
});

export { createBrandSchema, updateBrandSchema };