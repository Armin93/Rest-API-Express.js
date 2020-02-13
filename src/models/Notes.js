import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Notes = sequelize.define('notes', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    note: { type: Sequelize.STRING },
    created_at: { type: Sequelize.DATE },
    updated_at: { type: Sequelize.DATE },
    deleted_at: { type: Sequelize.DATE }
}, {
    timestamps: false
})

export default Notes;