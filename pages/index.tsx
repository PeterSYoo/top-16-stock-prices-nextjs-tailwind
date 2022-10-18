import { useQuery } from "@tanstack/react-query";
import { Card } from "../components/card.components";
import { getStocks, getStocksName } from "../hooks/useStocks";

const tickers = [
  "AAPL",
  "MSFT",
  "AMZN",
  "TSLA",
  "GOOGL",
  "GOOG",
  "BRK.B",
  "UNH",
  "JNJ",
  "XOM",
  "JPM",
  "META",
  "V",
  "PG",
  "NVDA",
  "HD",
];

export default function Home(props: any) {
  const stocksQuery = useQuery(["stocks"], getStocks, {
    initialData: props.stocks,
  });

  const stocksNamesQuery = useQuery(["stocks-name"], getStocksName, {
    initialData: props.stocksName,
  });

  return (
    <>
      <section className="py-[28px]">
        {/* Card Container */}
        <section className="flex flex-wrap gap-[9px] justify-center">
          {stocksQuery.data.map((stock: any, index: any) => (
            <div key={index}>
              {/* Card */}
              <Card
                tickers={tickers}
                stock={stock}
                index={index}
                name={stocksNamesQuery}
              />
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const stocks = await getStocks(tickers);
  const stocksName = await getStocksName(tickers);

  return { props: { stocks, stocksName }, revalidate: 60 };
};
