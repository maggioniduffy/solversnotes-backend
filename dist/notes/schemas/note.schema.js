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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteSchema = exports.Note = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const note_tags_enum_1 = require("../models/note-tags.enum");
const note_status_enum_1 = require("../models/note-status.enum");
let Note = class Note {
    title;
    authorId;
    description;
    category;
    status;
};
exports.Note = Note;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Note.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Note.prototype, "authorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Note.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: note_tags_enum_1.NoteTags }),
    __metadata("design:type", String)
], Note.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: note_status_enum_1.NoteStatus }),
    __metadata("design:type", String)
], Note.prototype, "status", void 0);
exports.Note = Note = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Note);
exports.NoteSchema = mongoose_1.SchemaFactory.createForClass(Note);
//# sourceMappingURL=note.schema.js.map