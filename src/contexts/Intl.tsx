import { WithChildren } from 'interfaces/children';
import { flattenMessages } from 'lib/core/language';
import locales from 'locales';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_KEY,
  POSSIBLE_LANGUAGES
} from 'utils/constants';

export type Language = 'pt' | 'en';

type ContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

type IntlContextData = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const IntlContext = createContext<ContextType>({} as ContextType);

export const IntlProvider = ({ children }: WithChildren): JSX.Element => {
  const defaultLanguage = () => {
    const language = localStorage.getItem(LANGUAGE_KEY);
    if (language && POSSIBLE_LANGUAGES.includes(language)) {
      return language as Language;
    }
    return DEFAULT_LANGUAGE;
  };

  const [currentLanguage, setCurrentLanguage] =
    useState<Language>(defaultLanguage);

  const setLanguage = (newLanguage = DEFAULT_LANGUAGE) =>
    setCurrentLanguage(newLanguage);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  }, [currentLanguage]);

  return (
    <ReactIntlProvider
      locale={currentLanguage}
      key={currentLanguage}
      messages={flattenMessages(locales[currentLanguage])}
      // eslint-disable-next-line no-console
      onError={console.warn}
    >
      <IntlContext.Provider
        value={{
          language: currentLanguage,
          setLanguage
        }}
      >
        {children}
      </IntlContext.Provider>
    </ReactIntlProvider>
  );
};

export const useIntl = (): IntlContextData => {
  const context = useContext(IntlContext);

  if (!context) {
    throw new Error('useIntl must be within its context');
  }
  return context;
};
