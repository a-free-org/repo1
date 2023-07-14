import { Document } from "mongoose";

export interface TestCollection extends Document {
    readonly text : string;
  }