
import { Router } from "express";
import { getHome, getAbout, postUser, Login, deletSingle, logOut} 
from "../controllers/userController.js";
import {checkToken} from "../middlewares/authMiddleware.js";

const router = Router()

router.get('/', getHome).get('/about', getAbout).post('/post-user',
postUser).post('/login', Login).delete('/delete-user/:id', checkToken, deletSingle).get('/logout', checkToken, logOut)
// router.get('/about', getAbout)

export default router