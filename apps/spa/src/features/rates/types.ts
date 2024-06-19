export interface RateDto {
  code: string;
  value: number;
};

export interface RatesDataDto {
  meta: {
    last_updated_at: string;
  };
  data: Record<string, RateDto>;
}

export type RatesData =
  | {
    base: null;
    rates: null;
  } | {
    base: string;
    rates: null;
    loading: true;
  } | {
    base: string;
    rates: null;
    error: true;
  } | {
    rates: RatesDataDto;
    base: string;
  }
