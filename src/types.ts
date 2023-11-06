export enum ProductTag {
    BEST_SELLER= 'bestSeller',
    off= 'off',
}
export enum Delivery {
    EXPRESS= 'Express',
    REGULAR= 'Regular',
}
export interface Seller{
    name: string,
    isVerifiedSeller: boolean
}
interface ProductRating {
    point: number,
    count: number
}
export interface Product {
        id: number,
        name: string,
        image: string,
        regularPrice: number,
        sellPrice: number,
        tag?: ProductTag,
        delivery?: Delivery,
        isHotDeal?: boolean,
        isNewProduct?: boolean,
        isFeatured?: boolean,
        isTrending?: boolean,
        rating: ProductRating,
        points?:  number,
        seller?: Seller
    
}


export type ProductVariant = 'hot' | 'new';