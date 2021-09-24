import { IsArray, IsString } from 'class-validator';

export class ProgramAppDocuments {
  @IsString()
  name: string;

  @IsArray()
  attrs: string[];
}

export class ProgramAppCollections {
  @IsString()
  name: string;

  @IsArray()
  documents: ProgramAppDocuments[];

  @IsArray()
  attrs: string[];
}

export class ProgramMetadata {
  @IsString()
  name: string;

  @IsString()
  id: string;

  @IsArray()
  collections: ProgramAppCollections[];
}
