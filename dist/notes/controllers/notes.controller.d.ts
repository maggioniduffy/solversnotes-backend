import { CreateNoteDto } from "../dtos/create-note.dto";
import { NotesService } from "../services/notes/notes.service";
import { FilterNotesDto } from "../dtos/filter-notes.dto";
import { EditNoteDto } from "../dtos/edit-note.dto";
export declare class NotesController {
    private readonly notesService;
    private logger;
    constructor(notesService: NotesService);
    createNote(createNoteDto: CreateNoteDto): Promise<import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, import("../schemas/note.schema").Note> & import("../schemas/note.schema").Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>>;
    getNotesByUser(filterDto: FilterNotesDto): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../schemas/note.schema").Note> & import("../schemas/note.schema").Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("../schemas/note.schema").Note> & import("../schemas/note.schema").Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getNoteById(id: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../schemas/note.schema").Note> & import("../schemas/note.schema").Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("../schemas/note.schema").Note> & import("../schemas/note.schema").Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
    deleteNoteById(id: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../schemas/note.schema").Note> & import("../schemas/note.schema").Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("../schemas/note.schema").Note> & import("../schemas/note.schema").Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
    editNoteById(id: string, editNote: EditNoteDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../schemas/note.schema").Note> & import("../schemas/note.schema").Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("../schemas/note.schema").Note> & import("../schemas/note.schema").Note & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
