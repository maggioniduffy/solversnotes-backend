import { NoteStatus } from "../models/note-status.enum";
import { NoteTags } from "../models/note-tags.enum";
export declare class EditNoteDto {
    title: string;
    description: string;
    status: NoteStatus;
    tag: NoteTags;
}
