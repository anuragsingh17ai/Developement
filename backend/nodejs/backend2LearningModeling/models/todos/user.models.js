import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
{
    userName: {
        type : String,
        required : true,
        lowercase : true,
        unique : true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    }
},{timestamps: true}
)

export const User = mongoose.model("User",userSchema);