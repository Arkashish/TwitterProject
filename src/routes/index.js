import express from "express";
import { createTweet, getTweet } from "../controllers/tweet-controller.js";
import { signIn, signUp } from '../controllers/user-controller.js'
import { toggleLike } from "../controllers/like-controller.js";
const router = express.Router()


router.post('/tweet', createTweet);
router.get('/tweet/:id', getTweet);
router.post('/signUp', signUp);
router.post('/signin', signIn);
router.post('/likes/toggle', toggleLike);

export default router;