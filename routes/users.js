import express from "express";
// import User from "../models/user.model.js";

import { getUsers, getUserById, updateUser, createUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.post('/:id', updateUser);

router.put('/:id', deleteUser);

export default router;