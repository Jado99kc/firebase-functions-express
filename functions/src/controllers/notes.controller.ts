import { NextFunction, Request, Response } from "express";
import NotesService from "../services/notes.services";

async function getNotes(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await NotesService.getNotes());
  } catch (error) {
    console.error(`Error getting notes`, error);
    next(error);
  }
}

export default {
  getNotes,
};
