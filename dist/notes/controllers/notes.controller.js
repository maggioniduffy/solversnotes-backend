"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const create_note_dto_1 = require("../dtos/create-note.dto");
const notes_service_1 = require("../services/notes/notes.service");
const filter_notes_dto_1 = require("../dtos/filter-notes.dto");
const common_2 = require("@nestjs/common");
const edit_note_dto_1 = require("../dtos/edit-note.dto");
let NotesController = class NotesController {
    notesService;
    logger = new common_1.Logger("NotesController");
    constructor(notesService) {
        this.notesService = notesService;
    }
    async createNote(createNoteDto) {
        this.logger.verbose("Creating note ", JSON.stringify(createNoteDto));
        const note = await this.notesService.createNote(createNoteDto);
        this.logger.debug("Note from service... ", JSON.stringify(createNoteDto));
        return note.toJSON();
    }
    async getNotesByUser(filterDto) {
        this.logger.debug("gettting notes with params: ", JSON.stringify(filterDto));
        const notes = await this.notesService.findNotesByUser(filterDto);
        return notes;
    }
    async getNoteById(id) {
        this.logger.verbose("Getting note with id: ", id);
        return await this.notesService.getNoteById(id);
    }
    async deleteNoteById(id) {
        this.logger.verbose("Deleting note with id: ", id);
        return await this.notesService.deleteNoteById(id);
    }
    async editNoteById(id, editNote) {
        this.logger.verbose("Editting note with id: ", id);
        return await this.notesService.editNote(id, editNote);
    }
};
exports.NotesController = NotesController;
__decorate([
    (0, common_1.Post)("/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_dto_1.CreateNoteDto]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "createNote", null);
__decorate([
    (0, common_1.Get)("/"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_notes_dto_1.FilterNotesDto]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getNotesByUser", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getNoteById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "deleteNoteById", null);
__decorate([
    (0, common_2.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_note_dto_1.EditNoteDto]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "editNoteById", null);
exports.NotesController = NotesController = __decorate([
    (0, common_1.Controller)("notes"),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
//# sourceMappingURL=notes.controller.js.map