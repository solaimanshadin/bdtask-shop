import { useState } from 'react';
import { Product } from '../types'
import ProductCard from './ProductCard';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
interface Props {
    products: Product[]
}
const NewArrivals = ({ products }: Props) => {
    return (
        <div>
            <div className="flex justify-between py-4">
                <h3>New Arrivals</h3>
                <a href="/">View All</a>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2'>
                {products?.map(product => <ProductCard key={product.id} {...product} />)}

            </div>


        </div>
    )
}

export default NewArrivals