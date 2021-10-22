import { contextsEN, contextsPT } from './contexts';
import { coreEN, corePT } from './core';

export type Locales = {
  [key: string]: string;
};

export default {
  pt: {
    ...contextsPT,
    ...corePT
  },
  en: {
    ...coreEN,
    ...contextsEN
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;
