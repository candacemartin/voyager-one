import mongoose, { Schema, Document } from 'mongoose';

//define the interface for shroom document
interface Shroom extends Document {
    name: string;
    description: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
};

//define schema
const shroomSchema = new Schema({
    name: {type: String, required: true },
    description: { type: String },
    type: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

//define model
const Shroom = mongoose.model<Shroom>('Shroom', shroomSchema);

export default Shroom;