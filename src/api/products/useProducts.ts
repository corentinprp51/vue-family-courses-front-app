import { Product } from '@/types/products/Product';
import instance from '@/api';
import { ListHomePage } from '@/types/lists/ListHomePage';
import { Ref } from 'vue';
import { useListStore } from '@/store/list';
import FlashMessagesService from '@/services/FlashMessagesService';

export const useProducts = (list: Ref<null | ListHomePage>) => {
  const listStore = useListStore()
  const toggleCheckProduct = async (product: Product) => {
      product.checked = !product.checked
      await instance.put(`products/${product.id}`, product)
  }
    const removeProduct = async (productId: number) => {
        if(list.value) {
            list.value.products = list.value.products.filter(p => p.id !== productId)
            listStore.setList(list.value)
            FlashMessagesService.getInstance().success('Le produit a bien été supprimé')
            await instance.delete(`lists/${list.value.id}/products/${productId}`)
        }
    }
    return {
      toggleCheckProduct,
      removeProduct
    }
}
