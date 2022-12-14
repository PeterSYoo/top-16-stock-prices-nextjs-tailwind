import Head from "next/head";
import { Header } from "./header.components";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Top 16 Stock Prices | NextJS / Tailwind</title>
        <meta name="description" content="Display top 16 stock prices" />
      </Head>
      <div className="min-h-screen min-w-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};
