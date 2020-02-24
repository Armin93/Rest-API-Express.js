import express from 'express';
const router = express.Router();
import { createNotes, getAllNotes, getOneNote, deleteNote, updateNote } from '../controllers/notes.controller';



//api/createNote
router.post('/create', createNotes);
//api/getAllNotes
router.get('/', getAllNotes);
//api/getOneNote/:notesId
router.get('/:note_uid', getOneNote);
//api/deleteNote
router.delete('/:note_uid', deleteNote);
//api/updateNote
router.put('/:note_uid', updateNote);


export default router;
