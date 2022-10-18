import { ThemeButton } from "./themeButton.components";

export const Header = () => {
  return (
    <>
      <section className="flex pb-[40px] items-center justify-between py-[28px] px-[20px]">
        <h1 className="text-2xl font-bold">Home</h1>
        <div className="flex gap-3 items-center">
          <ThemeButton />
        </div>
      </section>
    </>
  );
};
