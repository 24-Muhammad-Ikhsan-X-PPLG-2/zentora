export interface ChaptersType {
  result: string;
  response: string;
  data: ChaptersDataType[];
  limit: number;
  offset: number;
  total: number;
}

export interface ChaptersDataType {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationship[];
}

export interface Attributes {
  volume: string;
  chapter: string;
  title: any;
  translatedLanguage: string;
  externalUrl: any;
  isUnavailable: boolean;
  publishAt: string;
  readableAt: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  pages: number;
}

export interface Relationship {
  id: string;
  type: string;
}
