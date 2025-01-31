import React from 'react'

import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import PorductList from '@/components/product-list';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({isFeatured:true})
  const billboard = await getBillboard('04039e04-db15-48fa-8fad-00a4461da75f')
  return (
    <Container >
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 ">
        <PorductList title="Featured products" items={products} />
      </div>
    </Container>
  )
}

export default HomePage