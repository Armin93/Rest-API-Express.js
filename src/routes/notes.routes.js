import express from 'express';
const router = express.Router();
import { createNotes, getAllNotes, getOneNote, deleteNote, updateNote } from '../controllers/notes.controller';



//api/createNote
router.post('/create', createNotes);
//api/getAllNotes
router.get('/', getAllNotes);
//api/getOneNote/:notesId
router.get('/:id', getOneNote);
//api/deleteNote
router.delete('/:id', deleteNote);
//api/updateNote
router.put('/:id', updateNote);


export default router;
