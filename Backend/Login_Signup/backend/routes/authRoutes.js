import express from 'express'
import { validate } from '../middlewares/validate.js';
import { signinSchema, signupSchema } from '../schemas/authSchema.js';
import { getUser, SignIn, signup } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router=express.Router()

router.post("/signup",validate(signupSchema),signup)
router.post("/login",validate(signinSchema),SignIn)
router.get("/me",authMiddleware,getUser)
export default router;