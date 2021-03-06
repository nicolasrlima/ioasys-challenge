import { Language } from 'contexts/Intl';

export const BREAKPOINT_SM = '768px';
export const BREAKPOINT_MD = '1024px';
export const BREAKPOINT_LG = '1280px';
export const BREAKPOINT_XL = '1440px';
export const BREAKPOINT_2XL = '1920px';

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const DEFAULT_LANGUAGE = 'pt' as Language;

export const LANGUAGE_KEY = 'language';

export const POSSIBLE_LANGUAGES = ['pt', 'en'];
