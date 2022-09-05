import express from "express";
const router = express.Router();
import {
  home,
  addTask,
  getTask,
  delTask,
} from "../controllers/homeController.js";

router.get("/", home);
router.get("/get-task", getTask);
router.post("/add-task", addTask);
router.post("/delete-task", delTask);
export default router;
