import { Session, User } from "../../../models"
import languageDefinder from "../../../utils/languageDefinder"
import handleLoginValidation from "../../../middleware/handleLoginValidation"
import db from "../../../utils/db"
import bcrypt from 'bcrypt'
import cryptoRandomString from 'crypto-random-string'

const random = id => {
    return id + cryptoRandomString({ length: 20, type: 'alphanumeric' })
}

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST': {
            return handleLoginValidation(login, req, res)
        }
    }
}

async function login(req, res) {
    try {
        const language = languageDefinder(req.query.lang)

        await db.connect()
        const { password, email } = req.body
        console.log(password, email);
        const user = await User.findOne({ email: email })
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                const sessionID = random(user._id)
                new Session({
                    sessionID: sessionID,
                    userID: user._id,
                    createdAt: new Date()
                }).save()

                res.send({
                    success: true,
                    message: language.loginResult,
                    sessionID: sessionID
                })
            } else {
                res.send({
                    success: false,
                    message: language.passwordIncorrectError
                })
            }
        } else {
            res.send({
                success: false,
                message: language.userNotFoundError
            })
        }
    } catch (err) {
        res.send({
            success: false,
            message: err.toString()
        })
    }
}