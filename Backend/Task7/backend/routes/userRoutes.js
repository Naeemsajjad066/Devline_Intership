import express from 'express'
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/userController.js'
import { getProjectsByUserID } from '../controllers/projectController.js';

const router=express.Router();

router.post("/",createUser)
router.get("/",getUsers)
router.get("/:id",getUserById)
router.put("/:id",updateUser);
router.delete("/:id",deleteUser)
router.get("/:id/projects",getProjectsByUserID)

export default router