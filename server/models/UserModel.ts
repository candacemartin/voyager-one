import mongoose, { Schema, Document } from 'mongoose';

//define the interface for user document
interface User extends Document {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

//define schema
const userSchema: Schema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//define model
export default mongoose.model<User>('User', userSchema);
