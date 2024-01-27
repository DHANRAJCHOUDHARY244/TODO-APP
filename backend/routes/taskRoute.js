import express from "express"
import { CompleteTask, FetchSingleTask, UpdateTask, addTask, getTask, removeTask} from "../controllers/taskController.js"
import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();

router.post("/addTask", requireAuth, addTask)
router.get("/getTask",requireAuth, getTask)
router.post("/removeTask",requireAuth, removeTask)
router.post("/completeTask",requireAuth, CompleteTask)
router.post("/updateTask",requireAuth, UpdateTask)
router.post("/fetchSingleTask",requireAuth, FetchSingleTask)

export default router;