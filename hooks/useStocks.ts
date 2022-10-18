import { useQueries } from "@tanstack/react-query";

const token = process.env.NEXT_PUBLIC_TOKEN;

const fetchStocks = (symbol: any) => {
  return fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`
  );
};

const fetchCompanyName = (symbol: any) => {
  return fetch(
    `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${token}`
  );
};

export const useStocks = (symbols: any) => {
  symbols?.map((symbol: any, index: any) => {
    return useQueries({
      queries: [
        {
          queryKey: ["quote", symbol],
          queryFn: () => fetchStocks(symbol),
          retry: false,
          onSuccess: (data: any) => {
            console.log("Succesfully fetched", data, index);
          },
          onError: (error: any) => {
            console.log("There was an error", error, index);
          },
        },
      ],
    });
  });
};

export const useStockName = (symbols: any) => {
  symbols?.map((symbol: any, index: any) => {
    return useQueries({
      queries: [
        {
          queryKey: ["company-name", symbol],
          queryFn: () => fetchCompanyName(symbol),
          retry: false,
          onSuccess: (data: any) => {
            console.log("Succesfully fetched", data, index);
          },
          onError: (error: any) => {
            console.log("There was an error", error, index);
          },
        },
      ],
    });
  });
};
