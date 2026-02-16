

import mongoose from "mongoose"
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    
    },
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

userSchema.pre("save", async function name(next) {
    if(!this.isModified("password"))next()

        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt) 
})

export const userModel = mongoose.model("User", userSchema)