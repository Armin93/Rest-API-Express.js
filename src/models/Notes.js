import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Notes = sequelize.define('notes', {
    note_uid: { type: Sequelize.UUID, primaryKey: true },
    note: { type: Sequelize.STRING },
    created_at: {
        type: 'TIMESTAMP WITH TIME ZONE',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false 
    },
    updated_at: { 
        type: 'TIMESTAMP WITH TIME ZONE',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
     },
    deleted_at: {
        type: 'TIMESTAMP WITH TIME ZONE',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false }
},{
    timestamps:false
})
export default Notes;