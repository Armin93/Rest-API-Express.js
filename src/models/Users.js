import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const User = sequelize.define('users', {
    user_uid: { type: Sequelize.UUID, primaryKey: true },
    email: { type: Sequelize.STRING, required: true, unique: true },
    password: { type: Sequelize.STRING, required: true }
}, {
    timestamps: false
})

export default User;