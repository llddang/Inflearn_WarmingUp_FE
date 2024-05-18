import React, { useEffect, useState } from 'react';

import { tabInfos, products } from '../mocks/product';
import TabList from '../components/TabList';
import ProductList from '../components/ProductLists';
import { productDetailDto } from '../types';

const HomePage = () => {
  const [currTab, setCurrTab] = useState<string>(tabInfos[0].id);
  const [currProducts, setCurrProducts] = useState<productDetailDto[]>([]);

  useEffect(() => {
    if (currTab === 'All') setCurrProducts(products);
    else setCurrProducts(products.filter((item) => item.type === currTab));
  }, [currTab]);

  return (
    <div className='p-4 flex flex-col items-center gap-8'>
      <h1 className='font-bold text-2xl'>Product</h1>
      <TabList tabInfo={tabInfos} currTab={currTab} setCurrTab={setCurrTab} />
      <ProductList products={currProducts} />
    </div>
  );
};

export default HomePage;
