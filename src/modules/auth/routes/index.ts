import { authController } from "../controllers/auth.controller";
import { validate } from "@/middlewares/validate.middleware";
import { authValidator } from "../validators/auth.validator";
import { asyncHandler } from "@/handlers/async.handler";
import express from "express";
const router = express.Router();

router.post(
  "/login",
  validate(authValidator.LoginSchema),
  asyncHandler(authController.login),
);

router.post(
  "/register",
  validate(authValidator.registerSchema),
  asyncHandler(authController.signUp),
);
router.post("/refreshToken", asyncHandler(authController.handleRefreshTokens));

export const authRouter = router;
