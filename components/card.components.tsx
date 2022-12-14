export const Card = ({ tickers, stock, index, name }: any) => {
  return (
    <>
      <div className="bg-white dark:bg-black w-[325px] h-[174px] rounded-lg shadow shadow-gray-400 dark:shadow-black dark:shadow-lg flex flex-col justify-between p-[20px]">
        {/* Top Row */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-bold">{tickers[index]}</h1>
            <h6 className="text-xs font-thin">{name.data[index].name}</h6>
          </div>
          <h1 className="font-bold">${stock.c}</h1>
        </div>
        {/* Bottom Row */}
        <div className="flex justify-between items-center">
          <h6 className="text-xs font-thin">Daily</h6>
          <div className="flex gap-4 items-center">
            <h6 className="text-[#049C6B] text-xs font-bold">+${stock.d}</h6>
            <div className="bg-[#E8FFEB] dark:bg-[#2A4037] rounded-3xl">
              <h6 className="text-[#049C6B] text-xs font-bold py-1 px-2">
                {stock.dp}%
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
