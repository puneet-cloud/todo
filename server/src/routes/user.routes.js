
import { Router } from "express"      
import { verifyJWT } from "../middlewares/auth.middlewares.js"
import { registerUser, loginUser, getCurrentUser } from "../controllers/user.controller.js"
const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/current-user").get(verifyJWT, getCurrentUser)
export default router