import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../title';
import { Button } from '../../ui';
import Image from 'next/image';

interface Props {
    imageUrl: string;
    name: string;
    onClickAdd?: VoidFunction;
    className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
    imageUrl,
    name,
    onClickAdd,
    className
}) => {
    const textDetails = 'casnca mpsaicnoias sncainc';
    const totalPrice = 150;

    return (
        <div className={cn('flex flex-1', className)}>

            <div className='flex flex-1 relative w-full items-center justify-center'>
                <Image
                    src={imageUrl}
                    alt={name}
                    width={350}
                    height={350}
                    className='relative left-2 top-2 transition-all z-10 duration-300'
                />
            </div>
            <div className='w-[490px] bg-[#f7f5f4] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1'/>
                <p className='text-gray-400'>{ textDetails }</p>
                <Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>
                    Добавить в корзину за { String(totalPrice) } ₽
                </Button>
            </div>
        </div>
    );
};
