import User from '../models/Users'
import { jwt } from 'jsonwebtoken';
import { bcrypt } from 'bcrypt';
import { config } from 'config';

export async function createUser(req, res) {
    try {
        const { email, password } = req.body;
        const candidate = await User.findOne({
            where: {
                email
            }
        })
        if (candidate) {
            return res.status(400).json({
                message: 'This mail already exist'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            email,
            password: hashedPassword
        })
        await user.save();
        res.status(201).json({ message: 'User created' })
    } catch (error) {
        res.status(500).json({ message: 'Sorry,something went wrong' })
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email }
        })
        if (!user) {
            return res.status(400).json({ message: 'User not found' })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' })
        }
        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )
        res.json({ token, userId: user.id })
    } catch (error) {
        res.status(500).json({ message: 'Sorry,something went wrong' })
    }
}
