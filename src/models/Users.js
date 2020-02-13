import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const User = sequelize.define('users', {
    email: { type: Sequelize.STRING, required: true, unique: true },
    password: { type: Sequelize.STRING, required: true }
}, {
    timestamps: false
})

export default User;