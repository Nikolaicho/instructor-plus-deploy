import express from "express";
import authController from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", authController.handleRegister);
router.post("/logIn", authController.handleLogIn);
router.get("/isAdmin", authController.isAdmin);
router.post("/logout", authController.logOut);
router.get("/isSuperAdmin", authController.isSuperAdmin);
export default router;
