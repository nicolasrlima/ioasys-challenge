import { useRef } from 'react';
import { useIntl } from 'react-intl';

type UseTranslateReturn = {
  (id?: string | undefined, defaultMessage?: string | undefined): string;
  withValues(id: string, values?: any): string;
};

const useTranslate = (): UseTranslateReturn => {
  const { formatMessage } = useIntl();

  const translate = (id?: string, defaultMessage?: string): string => {
    if (!id) {
      return '';
    }

    return formatMessage({ id, defaultMessage });
  };

  translate.withValues = (id: string, values?: any) =>
    formatMessage({ id }, values);

  const translateRef = useRef(translate);

  return translateRef.current;
};

export default useTranslate;
