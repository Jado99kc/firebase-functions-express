import * as express from "express";
import NotesController from "../controllers/notes.controller";
const router = express.Router();

router.get("/", NotesController.getNotes);

export default router;
