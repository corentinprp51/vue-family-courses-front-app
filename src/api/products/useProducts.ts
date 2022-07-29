import { Product } from '@/types/products/Product';
import instance from '@/api';
import { ListHomePage } from '@/types/lists/ListHomePage';
import { Ref } from 'vue';

export const useProducts = (list: Ref<null | ListHomePage>) => {
  const toggleCheckProduct = async (product: Product) => {
      product.checked = !product.checked
      await instance.put(`products/${product.id}`, product)
  }
    const removeProduct = async (productId: number) => {
        if(list.value) {
            list.value.products = list.value.products.filter(p => p.id !== productId)
            await instance.delete(`lists/${list.value.id}/products/${productId}`)
        }
    }
    return {
      toggleCheckProduct,
      removeProduct
    }
}
