import User from '../models/Users'
import jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import  config  from 'config';
import uuidv4 from 'uuid/v4'

export async function createUser(req, res) {
    const id = uuidv4();
    const { email, password } = req.body;

    try {
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
        let newUser = await User.create({
            user_uid: id,
            email: email,
            password: hashedPassword
        });

        if (newUser) {
            return res.json({
                message: "User created successfully",
                data: newUser
            })
        }
    }

    catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { 
                email 
            }
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
        res.json({ token, userId: user.user_uid  })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    }
}

