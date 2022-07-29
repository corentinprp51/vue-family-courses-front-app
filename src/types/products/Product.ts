export interface Product {
    id: number
    libelle: string
    amount: number
    volume: string
    shoppinglist_id: number //Clef étrangère liste de courses
    created_at: string
    updated_at: string
    checked: boolean
}
