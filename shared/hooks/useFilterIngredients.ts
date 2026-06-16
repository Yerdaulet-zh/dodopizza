import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client"
import React, { useState } from 'react';
import { useSet } from "react-use";

export const useFilterIngredients = () => {
    const [ ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [ loading, setLoading ] = useState(false);
    const [ selectedIds, { toggle } ] = useSet(new Set<string>([]));

    React.useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const data = await Api.ingredients.getAll();
                console.log(data);
                setIngredients(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchIngredients();

    }, []);

    return { ingredients, loading, toggle, selectedIds }
}
