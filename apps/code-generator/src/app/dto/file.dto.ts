import { IsArray, IsString } from 'class-validator';

export class ProgramAppCollections {
  @IsString()
  name: string;

  @IsArray()
  instructions: {
    name: string;
    arguments: {
      name: string;
      bump: number;
      attributeType: string;
    }[];
  }[];

  @IsArray()
  attributes: {
    name: string;
    size: number;
    bump: number;
    attributeType: string;
  }[];
}

export class ProgramMetadata {
  @IsString()
  name: string;

  @IsString()
  id: string;

  @IsArray()
  collections: ProgramAppCollections[];
}
