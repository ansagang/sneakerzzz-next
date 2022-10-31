import { loginValidation } from "../utils/validations"

const handleLoginValidation = (handler, req, res) => {
    const errors = loginValidation(req)
    if (errors.length === 0) {
        handler(req, res)
    } else {
        res.send({
            success: false,
            message: errors
        })
    }
}

export default handleLoginValidation