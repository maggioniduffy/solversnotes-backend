import { Body, Controller, Get, Logger, Param, Post, Query, Delete } from "@nestjs/common";
import { CreateNoteDto } from "../dtos/create-note.dto";
import { NotesService } from "../services/notes/notes.service";
import { FilterNotesDto } from "../dtos/filter-notes.dto";
import { Patch } from "@nestjs/common";
import { EditNoteDto } from "../dtos/edit-note.dto";

@Controller("notes")
export class NotesController {
  private logger = new Logger("NotesController");
  constructor(private readonly notesService: NotesService) {}

  @Post("/")
  async createNote(@Body() createNoteDto: CreateNoteDto) {
    this.logger.verbose("Creating note ", JSON.stringify(createNoteDto));
    const note = await this.notesService.createNote(createNoteDto);
    this.logger.debug("Note from service... ", JSON.stringify(createNoteDto));

    return note.toJSON();
  }

  @Get("/")
  async getNotesByUser(@Query() filterDto: FilterNotesDto) {
    this.logger.debug("gettting notes with params: ", JSON.stringify(filterDto));
    const notes = await this.notesService.findNotesByUser(filterDto);
    return notes;
  }

  @Get(":id")
  async getNoteById(@Param("id") id: string) {
    this.logger.verbose("Getting note with id: ", id);
    return await this.notesService.getNoteById(id);
  }
  @Delete(":id")
  async deleteNoteById(@Param("id") id: string) {
    this.logger.verbose("Deleting note with id: ", id);
    return await this.notesService.deleteNoteById(id);
  }

  @Patch(":id")
  async editNoteById(@Param("id") id: string, @Body() editNote: EditNoteDto) {
    this.logger.verbose("Editting note with id: ", id);
    return await this.notesService.editNote(id, editNote);
  }
}
