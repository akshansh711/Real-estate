import express from 'express';
import { test } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifiedUser.js';
import { updateUser } from '../controllers/user.controller.js';
import { deleteUser } from '../controllers/user.controller.js';
import {getUserListings} from '../controllers/user.controller.js';
import {getUser} from '../controllers/user.controller.js'


const router = express.Router();

router.get('/test',test)
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/listings/:id',verifyToken,getUserListings)
router.get('/:id',verifyToken, getUser)


export default router;