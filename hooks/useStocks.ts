const token = process.env.NEXT_PUBLIC_TOKEN;

export const getStocks = async (tickers: any) => {
  return await Promise.all(
    tickers.map(async (symbol: any) => {
      return fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`
      ).then((res) => res.json());
    })
  );
};

export const getStocksName = async (tickers: any) => {
  return await Promise.all(
    tickers.map(async (symbol: any) => {
      return fetch(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${token}`
      ).then((res) => res.json());
    })
  );
};
