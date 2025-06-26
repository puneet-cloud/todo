
import { Router } from "express"      
import { verifyJWT } from "../middlewares/auth.middlewares.js"
import { getLectureCompletionStatus, updateLectureProgress } from "../controllers/lectureProgress.controller.js"
const router = Router()

router.route("/").post(verifyJWT, getLectureCompletionStatus)
router.route("/update").post(verifyJWT, updateLectureProgress)
export default router