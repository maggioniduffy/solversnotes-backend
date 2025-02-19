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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const note_schema_1 = require("../../schemas/note.schema");
let NotesService = class NotesService {
    noteModel;
    logger = new common_1.Logger("NotesService");
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    async createNote(createNoteDto) {
        const newNote = new this.noteModel(createNoteDto);
        this.logger.debug("Note createdL ", newNote);
        const savednote = await newNote.save();
        this.logger.debug("Note saved ", savednote);
        return savednote;
    }
    async findNotesByUser(filterDto) {
        const { title, authorId, category, status } = filterDto;
        const search = { authorId };
        if (title) {
            search.title = { $regex: title, $options: "i" };
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
    async getNoteById(id) {
        return await this.noteModel.findById(id).exec();
    }
    async deleteNoteById(id) {
        return await this.noteModel.findByIdAndDelete(id).exec();
    }
    async editNote(id, editDto) {
        const updatedNote = await this.noteModel.findByIdAndUpdate(id, editDto, {
            new: true,
            runValidators: true,
        });
        if (!updatedNote) {
            throw new common_1.NotFoundException(`Note with ID ${id} not found`);
        }
        return updatedNote;
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(note_schema_1.Note.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotesService);
//# sourceMappingURL=notes.service.js.map