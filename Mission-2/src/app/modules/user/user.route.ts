import express from "express";
import { getAllAdminUsers, getUserById, getUsers, userController } from "./user.controller";

const router = express.Router();



router.get('/', getUsers);
router.get('/admins', getAllAdminUsers);
router.get('/single-user/:id', getUserById);
router.post('/create-user', userController);

export default router;