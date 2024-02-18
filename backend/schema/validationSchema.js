const zod = require("zod");

// Signup schema
const signupSchema = zod.object({
  username: zod.string().min(3).max(50),
  email: zod.string().email(),
  password: zod.string().min(6),
});

// Login schema
const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

module.exports = { signupSchema, loginSchema };
