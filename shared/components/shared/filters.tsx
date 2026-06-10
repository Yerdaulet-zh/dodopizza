import React from "react";
import { Title, FilterCheckbox, RangeSlider, CheckboxFilterGroup } from "./index";
import { Input } from "../ui";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Модно собирать" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" placeholder="1000" min={100} max={1000} />
                </div>
                <div>
                    <RangeSlider min={0} max={1000} step={1}/>
                </div>
            </div>

            <CheckboxFilterGroup
                title="Ингредиенты:"
                clasName="mt-5"
                limit={6}
                defaultItems={[
                    {
                        text: "Syrny Sous",
                        value: "1"
                    },
                    {
                        text: "Motta",
                        value: "2"
                    },
                    {
                        text: "chesnok",
                        value: "3"
                    },
                    {
                        text: "Ogurchy",
                        value: "4"
                    },
                    {
                        text: "Krasny Luk",
                        value: "5"
                    },
                    {
                        text: "Tomato",
                        value: "6"
                    }
                ]}
                items={[
                    {
                        text: "Syrny Sous",
                        value: "1"
                    },
                    {
                        text: "Motta",
                        value: "2"
                    },
                    {
                        text: "chesnok",
                        value: "3"
                    },
                    {
                        text: "Ogurchy",
                        value: "4"
                    },
                    {
                        text: "Krasny Luk",
                        value: "5"
                    },
                    {
                        text: "Tomato",
                        value: "6"
                    },
                    {
                        text: "Syrny Sous",
                        value: "1"
                    },
                    {
                        text: "Motta",
                        value: "2"
                    },
                    {
                        text: "chesnok",
                        value: "3"
                    },
                    {
                        text: "Ogurchy",
                        value: "4"
                    },
                    {
                        text: "Krasny Luk",
                        value: "5"
                    },
                    {
                        text: "Tomato",
                        value: "6"
                    }
                ]}

            />
        </div>
    );
};
