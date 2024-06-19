export interface Currency {
  id: string;
  label: {
      EN: string;
      PL: string;
  };
  checked?: boolean;
}

export type CurrencyLabels = Record<string, string>;

