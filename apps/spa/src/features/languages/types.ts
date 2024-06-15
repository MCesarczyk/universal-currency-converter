export enum LanguageKeys {
  EN = 'EN',
  PL = 'PL',
};

export interface LanguageScheme {
  flag: string;
  headerTitle: string;
  currentTitle: string;
  inputPlaceholder: string;
  targetCurrencyLabel: string;
  targetTitle: string;
  resultTitle: string;
  clockLabel: string;
  loadingMessage: string;
  errorMessage: string;
  mainButtonLabel: string;
  resetButtonLabel: string;
  dateLabel: string;
};

export type Languages = Record<LanguageKeys, LanguageScheme>;
