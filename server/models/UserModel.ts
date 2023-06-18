import mongoose, { Schema, Document } from 'mongoose';

// define the interface for user document
export interface IUser extends Document {
  email: string;
  password: string;
  subscribedToEmails: boolean;
  createdAt: Date;
  updatedAt: Date;
}

//define schema
const userSchema: Schema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String },
  subscribedToEmails: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//define model
export default mongoose.model('User', userSchema);
