import { Document, Types } from "mongoose";

export interface TeamMember {
  user: Types.ObjectId;
}

export interface Team {
  name: string;
  owner: Types.ObjectId;
  members: TeamMember[];
}

export interface TeamDocument extends Document {
  _id: Types.ObjectId;
  name: string;
  owner: Types.ObjectId;
  members: TeamMember[];
  createdAt: Date;
  updatedAt: Date;
}
