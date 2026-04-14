import express from 'express'
import { createProject, deleteProject, getProjectById, getProjects, getProjectsByUserID, updateProject } from '../controllers/projectController.js'
import { getItemsByProjectId } from '../controllers/itemController.js'

const router=express.Router()

router.post("/",createProject)
router.get("/",getProjects)
router.put("/:id",updateProject)
router.delete("/:id",deleteProject)
router.get("/:id",getProjectById)
router.get("/:id/items",getItemsByProjectId)

export default router