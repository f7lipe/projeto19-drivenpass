import { Request, Response } from 'express';
import { safeNote } from '../schemas/safeNoteSchema.js';
import * as safeNoteService from '../services/safeNoteService.js';


export async function createSafeNote(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const safeNote: safeNote = { userId, ...req.body };
    await safeNoteService.createSafeNote(safeNote);
    res.sendStatus(201);
}

export async function getSafeNotes(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const { safeNoteId } = req.params;
    const safeNotes = await safeNoteService.getSafeNotes(parseInt(safeNoteId), userId);
    res.status(200).send(safeNotes)
}

export async function deleteSafeNote(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const { safeNoteId } = req.params;
    await safeNoteService.deleteSafeNote(parseInt(safeNoteId), userId);
    res.sendStatus(200);
}