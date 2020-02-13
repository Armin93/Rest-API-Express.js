import Notes from '../models/Notes';

export async function getAllNotes(req, res) {
    const notes = await Notes.findAll();
    res.json({
        data: notes
    })
}

export async function getOneNote(req, res) {
    const { id } = req.params;
    const note = await Notes.findOne({
        where: {
            id
        }
    });
    res.json({
        data: note
    })
}

export async function createNotes(req, res) {
    const note = req.body.note;
    try {
        let newNote = await Notes.create({
            id: "123e4567-e89b-12d3-a456-426655440002",
            note: note,
            created_at: new Date()
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
    const { id } = req.params;
    const deleteNote = await Notes.destroy({
        where: {
            id
        }
    });
    res.json({
        message: "Note deleted succesfully",
        data: deleteNote
    })
}

export async function updateNote(req, res) {
    const { id } = req.params;
    const { note } = req.body;

    let updateNotes = await Notes.findAll({
        attributes: ["note"],
        where: {
            id
        }
    })
    if (updateNotes.length > 0) {
        updateNotes.forEach(async notes => {
            await notes.update({
                id: "123e4567-e89b-12d3-a456-426655440002",
                note: note,
                updated_at: new Date()

            })
        })
    } {
        return res.json({
            message: "Notes updated successfully",
            data: updateNotes
        })
    }
}

