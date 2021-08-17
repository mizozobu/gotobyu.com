import type { ValuesType } from 'utility-types';
import { ContentTypeName } from './CmsClient.constants';

export type ContentTypeNameType = ValuesType<typeof ContentTypeName>;

export interface CmsClientListRes<T> {
  meta: {
    total: number;
    limit: number;
    skip: number;
  };
  items: T[];
}

export type CmsClientGetRes<T> = T;

export * from './contentful';
