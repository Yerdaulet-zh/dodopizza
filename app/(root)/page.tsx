import { Filters, Container, Title, TopBar, ProductsGroupList } from "@/shared/components/shared";
import { prisma } from "@/prisma/client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true
        }
      }
    }
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 1)}/>

      <Container className="mt-10 pb-14">
        <div className="flex gap-18">
          <div className="w-62.5">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map((category) => (
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      categoryId={category.id}
                      title={category.name}
                      items={category.products}
                    />
                  )
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
