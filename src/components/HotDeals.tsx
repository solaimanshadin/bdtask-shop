import { useState } from 'react';
import { Product } from '../types'
import ProductCard from './ProductCard';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
interface Props {
    products: Product[]
}
const HotDeals = ({ products }: Props) => {
    const productPerSlide = 6;
    const [productOffset, setProductOffset] = useState(0)

    const handleNextProducts = () => {
        setProductOffset((offset) => offset + productPerSlide)
    }
    const handlePreviousProducts = () => {
        setProductOffset((offset) => offset - productPerSlide)
    }
    return (
        <div className='mt-5'>
            <div className="flex justify-between py-4">
                <h3>Hot Deals</h3>
                <div>
                    <button className={productOffset == 0 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-800 cursor-pointer'} disabled={productOffset == 0} onClick={handlePreviousProducts}><BiSolidLeftArrow /></button>

                    <button className={!(productOffset + productPerSlide < products?.length) ? 'text-gray-500 cursor-not-allowed' : 'text-gray-800 cursor-pointer'} disabled={!(productOffset + productPerSlide < products?.length)} onClick={handleNextProducts}><BiSolidRightArrow /></button>
                </div>
            </div>

            <div className='grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-7  gap-2'>
                <div className='bg-red-100/50 p-4 rounded-md'>
                    <ul>
                        <li>Apple</li>
                        <li>Amazon</li>
                        <li>Nokia</li>
                        <li>Walton</li>
                    </ul>
                </div>
                {products?.slice(productOffset, productOffset + productPerSlide)?.map(product => <ProductCard variant='hot' key={product.id} {...product} />)}

            </div>
        
        </div>
    )
}

export default HotDeals