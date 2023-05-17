import mongoose, { Schema, Document } from 'mongoose';

//define the interface for user document
interface User extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

//define schema
const userSchema = new Schema({
    firstName: {type: String, required: true },
    lastName: {type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

//define model
const User = mongoose.model<User>('User', userSchema);

export default User;