import express from 'express';
import projectRoutes from './routes/projectRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
import itemRoutes from './routes/itemRoutes.js'
import { getAllData } from './controllers/userController.js';

const app =express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use('/api/users',userRoutes)
app.use('/api/projects',projectRoutes)
app.use('/api/items',itemRoutes)
export default app;