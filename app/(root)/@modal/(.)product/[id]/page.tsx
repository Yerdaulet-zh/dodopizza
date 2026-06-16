import { prisma } from "@/prisma/client";
import { ChooseProductModal } from "@/shared/components/shared";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProductModalPage({ params }: Props) {
    const { id } = await params;

    const productId = Number(id);

    if (isNaN(productId)) {
        return notFound();
    }

    const product = await prisma.product.findFirst({
        where: {
            id: productId
        },
        include: {
            ingredients: true,
            items: true,
        },
    });

    if (!product) {
        return notFound();
    }

    return (
        <ChooseProductModal product={product} />
    );
}
