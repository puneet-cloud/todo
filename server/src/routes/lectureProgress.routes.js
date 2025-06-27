
import { Router } from "express"      
import { verifyJWT } from "../middlewares/auth.middlewares.js"
import { getLectureCompletionStatus, getLectureProgress, updateLectureProgress } from "../controllers/lectureProgress.controller.js"
const router = Router()

router.route("/").post(verifyJWT, getLectureCompletionStatus)
router.route("/update").post(verifyJWT, updateLectureProgress)
router.route("/get-progress").get(verifyJWT, getLectureProgress)
export default router