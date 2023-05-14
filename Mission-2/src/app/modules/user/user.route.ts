import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.get('/', userController);

export default router;