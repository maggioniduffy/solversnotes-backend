import { NoteStatus } from "../models/note-status.enum";
import { NoteTags } from "../models/note-tags.enum";
export declare class FilterNotesDto {
    authorId: string;
    title?: string;
    status?: NoteStatus;
    category?: NoteTags;
}
