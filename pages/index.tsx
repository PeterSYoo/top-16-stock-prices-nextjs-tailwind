import { QueryClient, useQuery } from "@tanstack/react-query";
import { Card } from "../components/card.components";

export default function Home() {
  const token = process.env.NEXT_PUBLIC_TOKEN;

  const { isLoading, isError, error, data }: any = useQuery(
    ["stock"],
    async () => {
      return fetch(
        `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${token}`
      ).then((res) => res.json());
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log(data);

  return (
    <>
      <section className="py-[28px]">
        {/* Card Container */}
        <section className="flex flex-wrap gap-[9px] justify-center">
          {/* Card */}
          <Card />
        </section>
      </section>
      {data.slice(0, 15).map((stock: any) => (
        <div key={stock.id}>{stock.symbol}</div>
      ))}
    </>
  );
}

// export const getServerSideProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(["stock"], () => {
//     fetch("").then((res) => res.json());
//   });

//   return {
//     props: {},
//   };
// };
