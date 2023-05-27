import mongoose, { Schema, Document } from 'mongoose';
import UserModel from './UserModel';

//define the interface for grow document
interface Grow extends Document {
  created_by: string;
  mushroom_type: string;
  container: string;
  substrate: string;
  inoculation_method: string;
  start_date: Date;
  createdAt: Date;
  updatedAt: Date;
}

//define schema
const growSchema: Schema = new mongoose.Schema({
  created_by: { type: Schema.Types.ObjectId, ref: UserModel, required: true },
  mushroom_type: { type: String, required: true },
  container: { type: String, required: true },
  substrate: { type: String, required: true },
  inoculation_method: { type: String, required: true },
  start_date: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//define model
export default mongoose.model<Grow>('Grow', growSchema);
