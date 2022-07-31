import instance from '@/api';
import { Ref, ref } from 'vue';
import router from '@/router';
import { Product } from '@/types/products/Product';

export const useAddOne = () => {
    const error: Ref<string> = ref('')
    const addProduct = async (newProduct: Partial<Product>, listId: string) => {
        error.value = '';
            await instance.post(`/lists/${listId}/products/new`, newProduct)
                .then((response) => {
                    router.push(`/${listId}`)
                    return response.data
                })
                .catch(() => {
                    error.value = 'Une erreur est survenue'
                })
    }
    return {
        addProduct,
        error
    }
}
