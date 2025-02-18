import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { NoteTags } from "../models/note-tags.enum";
import { NoteStatus } from "../models/note-status.enum";

export type NoteDocument = HydratedDocument<Note>;

@Schema({ timestamps: true })
export class Note {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  authorId: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: NoteTags })
  category: NoteTags;

  @Prop({ required: true, enum: NoteStatus })
  status: NoteStatus;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
