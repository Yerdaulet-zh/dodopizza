import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import { Categories, Container, Title, SortPopup, TopBar } from "@/shared/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar />
    </>
  );
}
