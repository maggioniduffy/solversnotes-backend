import { HydratedDocument } from "mongoose";
import { NoteTags } from "../models/note-tags.enum";
import { NoteStatus } from "../models/note-status.enum";
export type NoteDocument = HydratedDocument<Note>;
export declare class Note {
    title: string;
    authorId: string;
    description: string;
    category: NoteTags;
    status: NoteStatus;
}
export declare const NoteSchema: import("mongoose").Schema<Note, import("mongoose").Model<Note, any, any, any, import("mongoose").Document<unknown, any, Note> & Note & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Note, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Note>> & import("mongoose").FlatRecord<Note> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
