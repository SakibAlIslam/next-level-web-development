import express from "express";
import { getUserById, getUsers, userController } from "./user.controller";

const router = express.Router();

router.get('/', getUsers);
router.post('/create-user', userController);
router.get('/single-user/:id', getUserById)

export default router;