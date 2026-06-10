import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
    className?: string;
}

const categories: string[] = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты']
const activeIndex: number = 0


export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                categories.map((cat, index) => (
                    <a className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary',
                        className
                    )} key={index}>
                        <button>
                            { cat }
                        </button>
                    </a>
                ))
            }
        </div>
    );
};
