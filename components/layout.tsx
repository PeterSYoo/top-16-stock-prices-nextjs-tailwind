import Head from "next/head";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Top 16 Stock Prices | NextJS / Tailwind</title>
      </Head>
      <div className="min-h-screen min-w-screen bg-orange-200">{children}</div>
    </>
  );
};
