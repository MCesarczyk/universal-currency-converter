export type Rate = Record<string, number>;

export interface RatesData {
  date: string;
  rates: Rate[];
  success: boolean;
}
