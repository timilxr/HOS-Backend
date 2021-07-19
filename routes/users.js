import express from "express";
// import User from "../models/user.model.js";

import { getUsers, getUserById, updateUser, createUser, verify, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.post('/verify', verify);

router.get('/:id', getUserById);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;