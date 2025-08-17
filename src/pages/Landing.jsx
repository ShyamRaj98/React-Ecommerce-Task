import React from 'react'
import ProductCard from '../components/ProductCard'

function Landing({productDetails, addToCart}) {
  return (
    <div className='bg-gray-100'>
        <section className='container md:lg lg:xl mx-auto py-[100px] px-4'>
          <h1 className='text-black text-2xl font-semibold mb-5'>Shop All</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 gap-y-6">
            {productDetails.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </section>
      </div>
  )
}

export default Landing