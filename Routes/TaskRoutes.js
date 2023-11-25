import express from "express";
import {TaskCreation,GetAllTask,GetSingleTask,UpdateTask,DeleteTask} from '../Controller/TaskController.js'
const router = express.Router();
import authenticateToken from '../Middleware/authenticationMiddleware.js'

router.post('/CreateTask',authenticateToken,TaskCreation)
router.get('/GetAllTask',authenticateToken,GetAllTask)
router.get('/GetSingleTask/:id',authenticateToken,GetSingleTask)
router.patch('/UpdateTask/:id',authenticateToken,UpdateTask)
router.delete('/DeleteTask/:id',authenticateToken,DeleteTask)
export default router;
