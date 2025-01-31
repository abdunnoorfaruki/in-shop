import React from 'react'

import NoResult from './no-result';
import ProductCard from './product-card';

import { Product } from '@/types';
interface ProductListPorps {
    title:string;
    items:Product[]
}
const PorductList : React.FC<ProductListPorps> = ({title, items}) => {
  return (
    <div className='space-y-4' >
        <h3 className="font-bold text-3xl"> {title} </h3>
        {items.length <= 0 && <NoResult />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
                <ProductCard key={item.id} data={item} />
            ))}
        </div>
    </div>
  )
}

export default PorductList