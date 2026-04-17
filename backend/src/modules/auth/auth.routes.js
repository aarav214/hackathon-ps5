import express from "express";
import { register, login } from "./auth.controller.js";
import { validateRegister, validateLogin } from "./auth.validation.js";

import passport from "passport";
import { generateToken } from "./auth.service.js";

// Step 1: Redirect to Google
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2: Callback
router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
        const token = generateToken(req.user);

        // send token to frontend
        res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
    }
);

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

export default router;