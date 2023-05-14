import express from "express";
import { getUsers, userController } from "./user.controller";

const router = express.Router();

router.get('/', getUsers);
router.post('/create-user', userController);

export default router;