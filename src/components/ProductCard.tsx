import { Delivery, Product, ProductTag, ProductVariant } from '../types'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import {BsFire} from 'react-icons/bs'
import { BiCartAdd, BiTrendingUp } from 'react-icons/bi'
import StarRatings from 'react-star-ratings';
import {MdVerified} from 'react-icons/md'

const ProductCard = ({name, image, regularPrice, sellPrice, tag, isFeatured, variant = 'new', isHotDeal, isNewProduct, isTrending, rating, delivery, seller}: Product & {variant?: ProductVariant}) => {
  return (
    <div className='rounded-md shadow-sm border bg-white'>
      <div className='relative max-w-full overflow-clip '>
          <div>
            {isFeatured && <div className='absolute left-1 top-1 bg-green-100 rounded-full p-1 text-green-500 '>
              <HiOutlineSpeakerphone  />
            </div>}

            {tag && <div className='absolute  bg-orange-200 text-orange-500 text-[8px] w-[100px] text-center rotate-[40deg] top-[11px] p-[2px]  right-[-31px] '>
                <span>{getLabelFromTag(tag, regularPrice, sellPrice)}</span>
              </div>}
              
          </div>
          <img src={image} alt={name} className='object-contain m-auto p-4 w-[150px] h-[150px]' />
      </div>
      <div className={variant == 'new' ? 'p-2  bg-slate-100' : 'p-2 '}>
        <h6 className='text-[12px]'>{name.slice(0, 20)} {name.length > 20 && '..'}</h6>

        {variant == 'hot' && <div>
          
          <div>
          <StarRatings  starRatedColor="orange" starSpacing={'2px'}
           numberOfStars={5} rating={rating.point} />
          <span className='text-[14px] text-gray-400 ml-2'>({rating.count})</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-1 mt-2 items-center text-[9px]">

              {isHotDeal &&  <span className='p-1 py-[2px]  bg-orange-200 text-orange-500'><BsFire className='inline'/> Hot</span>}

              {isNewProduct &&  <span className='p-1 py-[2px] bg-green-200 text-green-500'>New</span>}

              {isTrending &&  <span className='p-1 bg-green-200  text-green-500'><BiTrendingUp /></span>}

             </div>
             {delivery == Delivery.EXPRESS &&   <span className=' p-1 text-[9px] py-[2px] justify-self-end  bg-orange-500 text-white rounded-tl-md rounded-br-md '>{delivery}</span>}
           
          </div>
          
          <div className="flex my-1">
            <span className='text-[12px]'>Sold By: {seller?.isVerifiedSeller && <MdVerified className='inline'/>}  {seller?.name}</span>

          </div>
        </div> }
        <div className="flex justify-between text-[14px]">
          <p>SAR {regularPrice}</p>
          {sellPrice !== regularPrice && <p className='text-yellow-600'>${sellPrice}</p>}
        </div>
      </div>
      {variant == 'hot' && <div className='p-2'>
      <button className='w-full text-center bg-gray-800 text-white py-1 px-2 rounded-sm'> <BiCartAdd className='inline' /> Add to Cart</button>
      </div> }
    </div>
  )
}

function getLabelFromTag(tag: ProductTag, regularPrice: number, sellPrice: number) {
  switch(tag) {
    case ProductTag.BEST_SELLER:
      return 'Best Seller'
    case ProductTag.off:
      return `${(100 * sellPrice) / regularPrice}`
    default:
      return null
  }

}

export default ProductCard