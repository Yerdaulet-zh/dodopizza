import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import { Filters, Container, Title, TopBar } from "@/shared/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          <div className="w-62.5">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Product list
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
