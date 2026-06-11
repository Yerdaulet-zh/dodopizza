import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import { Filters, Container, Title, TopBar, ProductsGroupList } from "@/shared/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-18">
          <div className="w-62.5">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                {
                  id: 1,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                },
                {
                  id: 2,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                },
                {
                  id: 3,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                },
                {
                  id: 4,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                },
                {
                  id: 5,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                },
                {
                  id: 6,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                }
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                {
                  id: 1,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                },
                {
                  id: 2,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                },
                {
                  id: 3,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                },
                {
                  id: 4,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                },
                {
                  id: 5,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                },
                {
                  id: 6,
                  name: "Маргарита с Песто",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019d485742bd77288f87f77cdab0b347.webp",
                  price: 599,
                  items: [{
                    'price': 599
                  }]
                }
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
