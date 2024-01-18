import mongoose from "mongoose";


const {Schema} = mongoose;

const UserSchema = new Schema({
    fullName:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    avatarUrl: String
},
{
    timestamps: true
});

export default mongoose.model('User', UserSchema);