import express from 'express';
import { addUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/userController.js';
import { validate } from '../middleware/validate.js';
import { updateUserSchema, userSchema } from '../validators/userValidator.js';
const router=express.Router();
router.get('/users',getUsers);
router.get('/users/:id',getUser);
router.post('/users',validate(userSchema),addUser);
router.put('/users/:id',validate(updateUserSchema),updateUser)
router.delete('/users/:id',deleteUser);

export default router;