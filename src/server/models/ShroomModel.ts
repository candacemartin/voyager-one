import mongoose, { Schema, Document } from 'mongoose';

//define the interface for shroom document
interface Shroom extends Document {
  name: string;
  description: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

//define schema
const shroomSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//define model
export default mongoose.model<Shroom>('Shroom', shroomSchema);
