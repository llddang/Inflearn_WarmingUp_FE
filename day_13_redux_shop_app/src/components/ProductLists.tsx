import React from 'react';
import { productDetailDto } from '../types';

import ProductCard from './ProductCard';

interface ProductListProps {
  products: productDetailDto[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <article>
      <div className='text-sm text-slate-500 mb-2'>
        Showing: {products.length} Items
      </div>
      <section className='grid grid-cols-3 md:grid-cols-4 gap-4'>
        {products.map((item) => {
          return <ProductCard key={`item-${item.id}`} item={item} />;
        })}
      </section>
    </article>
  );
};

export default ProductList;
