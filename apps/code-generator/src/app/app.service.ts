import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import * as Handlebars from 'handlebars';
import { resolve } from 'path';

import { ProgramMetadata } from './dto/file.dto';
import {
  IFormatedMetadata,
  IFormatedMetadataCAttributes,
  IFormatedMetadataCInstructions,
  IFormatedMetadataCollection,
  IGenerateFileResponse,
} from './dto/types';
import { formatName } from './utils/utils';

@Injectable()
export class AppService {
  public files: ProgramMetadata[] = [];

  private formatMetadata(metadata: ProgramMetadata): IFormatedMetadata {
    const formatedCollections: IFormatedMetadataCollection[] =
      metadata.collections.map((collection) => {
        const formatedAttributes: IFormatedMetadataCAttributes[] =
          collection.attributes.map((attribute) => {
            return {
              ...attribute,
              name: formatName(attribute.name),
            };
          });

        const formatedInstructions: IFormatedMetadataCInstructions[] =
          collection.instructions.map((instruction) => {
            const formatedInstArgument = instruction.arguments.map(
              (argument) => ({
                ...argument,
                name: formatName(argument.name),
              })
            );

            return {
              name: formatName(instruction.name),
              arguments: formatedInstArgument,
            };
          });

        const collections: IFormatedMetadataCollection = {
          name: formatName(collection.name),
          attributes: formatedAttributes,
          instructions: formatedInstructions,
        };

        return collections;
      });

    const formatedMetadata: IFormatedMetadata = {
      id: metadata.id,
      name: formatName(metadata.name),
      collections: formatedCollections,
    };

    return formatedMetadata;
  }

  generateFile(metadata: ProgramMetadata): IGenerateFileResponse {
    try {
      const data = readFileSync(
        resolve('apps/code-generator/src/app/templates/__template.rs'),
        'utf8'
      );
      const template = Handlebars.compile(data);
      const formatedMetadata = this.formatMetadata(metadata);
      const compiledTemplated = template({ program: formatedMetadata });
      const programFile = compiledTemplated;

      writeFileSync(
        resolve(
          'apps/code-generator/src/app/templates/' + metadata.name + '.rs'
        ),
        programFile
      );

      return { status: true, data: metadata };
    } catch (e) {
      console.log('Error:', e.stack);
      return { status: false, data: e.stack };
    }
  }
}
