import { ProgramMetadata } from './file.dto';

export interface IGenerateFileResponse {
  status: boolean;
  data?: ProgramMetadata;
}

export interface IFormatedName {
  snakeCase: string;
  normalCase: string;
  camelCase: string;
  pascalCase: string;
}

export interface IFormatedMetadataCInstructions {
  name: IFormatedName;
  arguments: {
    name: {
      snakeCase: string;
      normalCase: string;
      camelCase: string;
    };
    bump: number;
    attributeType: string;
  }[];
}

export interface IFormatedMetadataCAttributes {
  name: IFormatedName;
  size: number;
  bump: number;
  attributeType: string;
}

export interface IFormatedMetadataCollection {
  name: IFormatedName;
  attributes: IFormatedMetadataCAttributes[];
  instructions: IFormatedMetadataCInstructions[];
}

export interface IFormatedMetadata {
  id: string;
  name: IFormatedName;
  collections: IFormatedMetadataCollection[];
}
