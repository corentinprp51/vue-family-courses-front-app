import { Product } from '@/types/products/Product';
import { User } from '@/types/User';

export interface ListHomePage {
    id: number
    title: string
    invitation_link: string
    created_at: string
    updated_at: string
    products: Array<Product>
    role: string
    user_id: number
    users: Array<User>
}
