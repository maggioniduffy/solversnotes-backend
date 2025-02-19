import { IsString, IsNotEmpty, IsEnum } from "class-validator";
import { NoteStatus } from "../models/note-status.enum";
import { NoteTags } from "../models/note-tags.enum";

export class EditNoteDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(NoteStatus)
  @IsNotEmpty()
  status: NoteStatus;

  @IsEnum(NoteTags)
  @IsNotEmpty()
  tag: NoteTags;
}
