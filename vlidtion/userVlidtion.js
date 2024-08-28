const Joi = require('joi');

// Define the Joi schema
const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required()
    .messages({
      'string.base': 'Name should be a type of text',
      'string.empty': 'Name cannot be empty',
      'string.min': 'Name should have at least 3 characters',
      'string.max': 'Name should have less than or equal to 30 characters',
      'any.required': 'Name is required',
    }),
  email: Joi.string().email().required()
    .messages({
      'string.email': 'Email must be a valid email address',
      'any.required': 'Email is required',
    }),
});

// Export the schema
module.exports = { userSchema };