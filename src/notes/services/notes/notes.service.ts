import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateNoteDto } from "src/notes/dtos/create-note.dto";
import { EditNoteDto } from "src/notes/dtos/edit-note.dto";
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
    const { title, authorId, category, status } = filterDto;

    const search: any = { authorId };
    if (title) {
      search.title = { $regex: title, $options: "i" }; // ✅ Case-insensitive search
    }
    if (category) {
      search.category = category;
    }
    if (status) {
      search.status = status;
    }

    const notes = await this.noteModel.find(search).exec();

    return notes;
  }

  async getNoteById(id: string) {
    return await this.noteModel.findById(id).exec();
  }

  async deleteNoteById(id: string) {
    return await this.noteModel.findByIdAndDelete(id).exec();
  }

  async editNote(id: string, editDto: EditNoteDto) {
    const updatedNote = await this.noteModel.findByIdAndUpdate(id, editDto, {
      new: true, // Return the updated document
      runValidators: true,
    });

    if (!updatedNote) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }

    return updatedNote;
  }
}
