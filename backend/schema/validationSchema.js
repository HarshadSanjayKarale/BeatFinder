const { object, string, email } = require('zod');

// Signup schema
const signupSchema = object({
  username: string().min(3).max(50),
  email: email(),
  password: string().min(6),
});

// Login schema
const loginSchema = object({
  email: email(),
  password: string().min(6),
});

module.exports = { signupSchema, loginSchema };
