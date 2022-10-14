import { BsSun } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <section className="flex pb-[40px] items-center max-w-[1440px] m-auto w-full justify-between py-[28px] px-[40px]">
        <h1 className="text-2xl font-bold">Home</h1>
        <div className="flex gap-3 items-center">
          <button>
            <BsSun />
          </button>
          <button>
            <h6 className="text-sm">Light Mode</h6>
          </button>
        </div>
      </section>
    </>
  );
};
