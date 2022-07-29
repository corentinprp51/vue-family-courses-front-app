import { Product } from '@/types/products/Product';
import { UserFromList } from '@/types/users/UserFromList';

export interface ListHomePage {
    id: number
    title: string
    invitation_link: string
    created_at: string
    updated_at: string
    products: Array<Product>
    role: string
    user_id: number
    users: Array<UserFromList>
}
