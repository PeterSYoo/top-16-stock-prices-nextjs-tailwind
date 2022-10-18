import { Card } from "../components/card.components";
import { useStockName, useStocks } from "../hooks/useStocks";

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

export default function Home() {
  const queryResults: any | unknown = useStocks(tickers);
  const nameResults: any | unknown = useStockName(tickers);

  return (
    <>
      <section className="py-[28px]">
        {/* Card Container */}
        <section className="flex flex-wrap gap-[9px] justify-center">
          {queryResults?.map((result: any, index: any) => (
            <div key={index}>
              {/* Card */}
              <Card
                tickers={tickers}
                result={result}
                index={index}
                name={nameResults[index]}
              />
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
