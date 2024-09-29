import React from 'react'

import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'

import Gallery from '@/components/gallery'
import PorductList from '@/components/product-list'
import Container from '@/components/ui/container'
import Info from '@/components/info'

interface ProductPageProps {
    params:{
        productId:string
    }
}
const ProductPage : React.FC<ProductPageProps> = async ({params}) => {
  const product = await getProduct(params.productId)
  console.log("category: ", product?.category?.name)
  const suggestedProducts = await getProducts({categoryId:product?.category?.id})


  return (
    <div className='bg-white' >
        <Container >
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
                    <Gallery images={product.images} />
                    <div className="mt-10 px-4 sm:px-0 lg:mt-0">
                        <Info data={product} />
                    </div>
                </div>
                <hr className='my-10' />
                <PorductList title='Suggested products' items={suggestedProducts} />
            </div>
        </Container>
    </div>
  )
}

export default ProductPage