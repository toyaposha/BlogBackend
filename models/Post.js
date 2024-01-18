import mongoose from "mongoose";

const  { Schema} = mongoose;

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true,
        unique: true
    },
    tags: {
        type: Array,
        default: []
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    viewsCount: {
        type: Number,
        default: 0
    },
    imageUrl: String

},
{
    timestamps: true
});

export default mongoose.model('Post' , PostSchema)