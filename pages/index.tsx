import { Card } from "../components/card.components";

export default function Home() {
  return (
    <>
      <section className="py-[28px]">
        {/* Card Container */}
        <section className="flex flex-wrap gap-[9px] justify-center">
          {/* Card */}
          <Card />
        </section>
      </section>
    </>
  );
}
