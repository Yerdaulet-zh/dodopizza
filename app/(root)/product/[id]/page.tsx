import { prisma } from "@/prisma/client";
import { Container, GroupVariants, PizzaImage, Title } from "@/shared/components/shared";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const product = await prisma.product.findFirst({ where: { id: Number(id) } });
    console.log(product);

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <PizzaImage imageUrl={product.imageUrl} size={40} />

                <div className="w-[490px] bg-[#f7f6f5] p-7">
                    <Title text={product.name} size={'md'} className="font-extrabold mb-1" />
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est soluta cupiditate, voluptatem minima assumenda dolore amet, explicabo commodi aliquid quis, illo iste! Nihil ipsa illo sit debitis assumenda! Soluta, laborum.</p>
                    <GroupVariants
                        items={[
                            {
                                name: 'Маленькая',
                                value: '1'
                            },
                            {
                                name: 'Средняя',
                                value: '2'
                            },
                            {
                                name: 'Болльшая',
                                value: '3'
                            }
                        ]}
                    />
                </div>
            </div>
        </Container>
    );
}
