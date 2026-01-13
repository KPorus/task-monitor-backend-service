import { z } from "zod";

// Register Validator
const registerSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format from registerSchema"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    name: z.string().optional(),
  }),
});

// Login Validator
const LoginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  }),
});

export type TLoginInput = z.infer<typeof LoginSchema>["body"];
export type TRegisterInput = z.infer<typeof registerSchema>["body"];

// Export Validators
export const authValidator = {
  registerSchema,
  LoginSchema,
};
