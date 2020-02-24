import Notes from '../models/Notes';
import uuidv4 from 'uuid/v4'
export async function getAllNotes(req, res) {
    const notes = await Notes.findAll();
    res.json({
        data: notes
    })
}

export async function getOneNote(req, res) {
    const { note_uid } = req.params;
    const note = await Notes.findOne({
        where: {
            note_uid
        }
    });
    res.json({
        data: note
    })
}

export async function createNotes(req, res) {
    const id = uuidv4();
    const note = req.body.note;
    try {
        let newNote = await Notes.create({
            note_uid:id,  
            note: note,
        });
        if (newNote) {
            return res.json({
                message: "Notes created successfully",
                data: newNote
            })
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        }
        )
    }

}

export async function deleteNote(req, res) {
    const { note_uid } = req.params;
    const deleteNote = await Notes.destroy({
        where: {
            note_uid
        }
    });
    res.json({
        message: "Note deleted succesfully",
        data: deleteNote
    })
}

export async function updateNote(req, res) {
    const { note_uid } = req.params;
    const { note } = req.body;

    let updateNotes = await Notes.findAll({
        attributes: ["note"],
        where: {
            note_uid
        }
    })
    if (updateNotes.length > 0) {
        updateNotes.forEach(async notes => {
            await notes.update({
                note_uid,
                note: note,
            })
        })
    } {
        return res.json({
            message: "Notes updated successfully",
            data: updateNotes
        })
    }
}

