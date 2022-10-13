export default function Home() {
  return (
    <>
      <section className="max-w-[1440px] border border-red-500 m-auto  py-[28px] px-[40px]">
        {/* Header Container */}
        <section className="flex justify-between pb-[40px] px-5">
          <h1>Home</h1>
          <h6 className="text-sm">Light Mode</h6>
        </section>
        {/* Card Container */}
        <section className="flex flex-wrap gap-[9px] justify-center">
          {/* Card */}
          <div className="bg-white w-[325px] h-[174px] rounded-lg shadow-md flex flex-col justify-between p-[20px]">
            {/* Top Row */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="font-bold">AAPL</h1>
                <h6 className="text-xs">Apple</h6>
              </div>
              <h1 className="font-bold">$23,738</h1>
            </div>
            {/* Bottom Row */}
            <div className="flex justify-between items-center">
              <h6 className="text-xs">Daily</h6>
              <div className="flex gap-4 items-center">
                <h6 className="text-[#049C6B] text-xs font-bold">+$556.14</h6>
                <div className="bg-[#E8FFEB] rounded-3xl">
                  <h6 className="text-[#049C6B] text-xs font-bold p-1">
                    +64.11%
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
