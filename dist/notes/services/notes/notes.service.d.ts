import { Model } from "mongoose";
import { CreateNoteDto } from "src/notes/dtos/create-note.dto";
import { FilterNotesDto } from "src/notes/dtos/filter-notes.dto";
import { Note, NoteDocument } from "src/notes/schemas/note.schema";
export declare class NotesService {
    private noteModel;
    private logger;
    constructor(noteModel: Model<NoteDocument>);
    createNote(createNoteDto: CreateNoteDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findNotesByUser(filterDto: FilterNotesDto): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
}
