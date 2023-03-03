import { Schema, model } from "mongoose";

const VideoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Video', VideoSchema);