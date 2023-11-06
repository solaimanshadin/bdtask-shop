import { useMemo } from 'react'
import NewArrivals from './components/NewArrivals'
import products from './data/products.json'
import { Product } from './types'
import './App.css'
import HotDeals from './components/HotDeals'
function App() {
  const newArrivals  = useMemo(() => products.filter((product => product.isNewProduct ))
  , [products]).slice(0, 7)
  const hotproducts  = useMemo(() => products.filter((product => product.isHotDeal))
  , [products])
  console.log(hotproducts, newArrivals)
  return (
    <main className='container'>
      <NewArrivals products={newArrivals as Product[]}/>
      <HotDeals products={hotproducts as Product[]}/>
    </main>
  )
}

export default App
