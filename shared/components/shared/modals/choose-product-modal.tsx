'use client';

import React from "react";
import { Dialog, DialogContent } from "../../ui/dialog";
import { Product } from "@prisma/client";
import { cn } from "@/shared/lib/utils";
import { Title } from "../title";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "./choose-product-form";
import { ProductWithRelations } from "@/@types/prisma.product";
import { ChoosePizzaForm } from "./choose-pizza-form";

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter();
    const isPizzaForm = Boolean(product.items[0].pizzaType);

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn(
                "p-0 w-265 min-w-265 min-h-125 bg-white overflow-hidden",
                className
            )}>
                {
                    isPizzaForm ?
                        <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients} items={product.items}/> :
                        <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
                }
            </DialogContent>
        </Dialog>
    );
};
