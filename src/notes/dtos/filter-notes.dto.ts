import { IsString, IsNotEmpty, IsEnum, IsOptional } from "class-validator";
import { NoteStatus } from "../models/note-status.enum";
import { NoteTags } from "../models/note-tags.enum";

export class FilterNotesDto {
  @IsNotEmpty()
  @IsString()
  authorId: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsEnum(NoteStatus)
  status?: NoteStatus;

  @IsOptional()
  @IsEnum(NoteTags)
  tag?: NoteTags;
}
