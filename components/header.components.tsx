import { BsSun } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <section className="flex pb-[40px] items-center justify-between py-[28px]">
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
