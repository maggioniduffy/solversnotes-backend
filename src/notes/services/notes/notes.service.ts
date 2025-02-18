import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateNoteDto } from "src/notes/dtos/create-note.dto";
import { FilterNotesDto } from "src/notes/dtos/filter-notes.dto";
import { Note, NoteDocument } from "src/notes/schemas/note.schema";

@Injectable()
export class NotesService {
  private logger = new Logger("NotesService");
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async createNote(createNoteDto: CreateNoteDto) {
    const newNote = new this.noteModel(createNoteDto);
    this.logger.debug("Note createdL ", newNote);
    const savednote = await newNote.save();
    this.logger.debug("Note saved ", savednote);

    return savednote;
  }

  async findNotesByUser(filterDto: FilterNotesDto) {
    const { title, authorId, tag, status } = filterDto;

    const search: any = { authorId };
    if (title) {
      search.title = { $regex: title, $options: "i" }; // ✅ Case-insensitive search
    }
    if (tag) {
      search.tag = tag;
    }
    if (status) {
      search.status = status;
    }

    const notes = await this.noteModel.find(search).exec();

    return notes;
  }
}
