// schema/signUpSchema.js

const { z } = require('zod');

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

module.exports = signUpSchema;
