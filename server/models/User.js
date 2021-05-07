import { Schema, model } from 'mongoose'

const User = Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

const UserModel = model("User", User)

export default UserModel;
