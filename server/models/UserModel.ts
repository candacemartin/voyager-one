import mongoose, { Schema, Document } from 'mongoose';

//define the interface for user document
interface User extends Document {
  email: string;
  password: string;
  googleId: string;
  displayName: string;
  createdAt: Date;
  updatedAt: Date;
}

//define schema
const userSchema: Schema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String },
  googleId: { type: String },
  displayName: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//define model
export default mongoose.model<User>('User', userSchema);
