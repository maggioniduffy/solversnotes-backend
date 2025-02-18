import { Body, Controller, Get, Logger, Post, Query, UseGuards } from "@nestjs/common";
import { CreateNoteDto } from "../dtos/create-note.dto";
import { NotesService } from "../services/notes/notes.service";
import { FilterNotesDto } from "../dtos/filter-notes.dto";

@Controller("notes")
export class NotesController {
  private logger = new Logger("NotesController");
  constructor(private readonly notesService: NotesService) {}

  @Post("/")
  async createNote(@Body() createNoteDto: CreateNoteDto) {
    this.logger.verbose("Creating note ", JSON.stringify(createNoteDto));
    const note = await this.notesService.createNote(createNoteDto);
    this.logger.debug("Note from service ", JSON.stringify(createNoteDto));

    return note.toJSON();
  }

  @Get("/")
  async getNotesByUser(@Query() filterDto: FilterNotesDto) {
    this.logger.debug("gettting notes with params: ", JSON.stringify(filterDto));
    const notes = await this.notesService.findNotesByUser(filterDto);
    return notes;
  }
}
