import { http } from 'msw';
import { ratesMock } from '../features/rates/fixtures';

export const handlers = [
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  http.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_LtMsWwNo2NBhu0Zw47ETWqKQ1eUMyaYNR9oHZeba&base_currency=USD', (req, res, ctx) => {
  // http.get('/v3/latest?apikey=cur_live_LtMsWwNo2NBhu0Zw47ETWqKQ1eUMyaYNR9oHZeba', (req, res, ctx) => {
    // const url = new URL(req.url);
    // const currencyBase = url.searchParams.get('base_currency');

    return res(
      // ctx.json(ratesMock[currencyBase as keyof typeof ratesMock]),
      ctx.json(ratesMock['USD']),
    );
  }),
];
