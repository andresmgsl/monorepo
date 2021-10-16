export interface FormattedName {
  snakeCase: string;
  normalCase: string;
  camelCase: string;
  pascalCase: string;
}

export interface CodeGeneratorParameters {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // TODO:  fix to support only
  // { collection: formatedCollection },
  // { instruction: formatedInstructions },
  // { instruction: formatedInstructions },
  // { program: formatedProgram },
}

export interface ApplicationMetadata {
  application: { template: string; fileName: string };
  collections: { template: string; fileName: string }[];
  instructions: { template: string; fileName: string }[];
  collectionsMod: { template: string };
  instructionsMod: { template: string };
}

// Bulldozer interfaces

export interface ApplicationInfo {
  authority: string;
  name: string;
}

export interface Application {
  id: string;
  data: ApplicationInfo;
}

export interface CollectionInfo {
  authority: string;
  application: string;
  name: string;
}

export interface Collection {
  id: string;
  data: CollectionInfo;
}

export interface CollectionExtension {
  attributes: CollectionAttribute[];
}

export type CollectionExtended = Collection & {
  attributes: CollectionAttribute[];
};

export interface CollectionAttributeInfo {
  authority: string;
  application: string;
  collection: string;
  name: string;
  kind: {
    id: number;
    name: string;
    size: number;
  };
  modifier: {
    id: number;
    name: string;
    size: number;
  };
}

export interface CollectionAttribute {
  id: string;
  data: CollectionAttributeInfo;
}

export interface InstructionInfo {
  authority: string;
  application: string;
  name: string;
  body: string;
}

export interface Instruction {
  id: string;
  data: InstructionInfo;
}

export interface InstructionArgumentInfo {
  authority: string;
  application: string;
  instruction: string;
  name: string;
  kind: {
    id: number;
    name: string;
    size: number;
  };
  modifier: {
    id: number;
    name: string;
    size: number;
  };
}

export interface InstructionArgument {
  id: string;
  data: InstructionArgumentInfo;
}

export interface Program {
  id: string;
  name: string;
}

export interface InstructionAccountInfo {
  authority: string;
  application: string;
  instruction: string;
  name: string;
  kind: {
    id: number;
    name: string;
  };
  modifier: {
    id: number;
    name: string;
  };
  collection: string | null;
  program: string | null;
  space: number | null;
  payer: string | null;
  close: string | null;
}

export interface InstructionAccount {
  id: string;
  data: InstructionAccountInfo;
}

export interface InstructionAccountExtended {
  id: string;
  data: Omit<InstructionAccountInfo, 'collection' | 'payer' | 'close'> & {
    collection: Collection | null;
    payer: InstructionAccount | null;
    close: InstructionAccount | null;
    relations: InstructionRelationExtended[];
  };
}

export type InstructionExtended = Instruction & {
  arguments: InstructionArgument[];
  accounts: InstructionAccountExtended[];
};

export interface InstructionRelationInfo {
  authority: string;
  application: string;
  instruction: string;
  from: string;
  to: string;
}

export interface InstructionRelation {
  id: string;
  data: InstructionRelationInfo;
}

export interface InstructionRelationExtended {
  id: string;
  data: Omit<InstructionRelationInfo, 'from' | 'to'> & {
    from: InstructionAccount;
    to: InstructionAccount;
  };
}
