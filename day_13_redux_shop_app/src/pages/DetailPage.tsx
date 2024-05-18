import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addProduct } from '../store/products.slice';

import { products } from '../mocks/product';
import { Link, useParams } from 'react-router-dom';
import { productDetailDto } from '../types';

const DetailPage = () => {
  const [inCart, setInCart] = useState<boolean>(false);
  const [product, setProduct] = useState<productDetailDto>();
  const dispatch = useAppDispatch();
  const cartProduct = useAppSelector((state) => state.product).products;

  const { id } = useParams();
  useEffect(() => {
    const productMatch = products.filter((item) => item.id === Number(id));
    setProduct(productMatch[0]);
  }, [id]);

  useEffect(() => {
    cartProduct.forEach((item) => {
      if (item.id === product?.id) setInCart(true);
    });
  }, [product, cartProduct]);

  const handleClickAddProduct = () => {
    if (product === undefined) return;
    dispatch(
      addProduct({
        id: product.id,
        img: product.img,
        name: product.name,
        price: product.price,
        type: product.type,
        quantity: 1,
      })
    );
  };

  return (
    <div className='m-auto max-w-[1000px] pt-36 pb-40 p-8 flex gap-4'>
      <img className='w-[35%]' src={product?.img} alt={product?.name} />
      <div>
        <div className='mb-2 text-lg font-semibold text-slate-300'>
          {product?.type}
        </div>
        <div className='mb-2 text-2xl'>{product?.name}</div>
        <div className='mb-2 text-4xl font-semibold'>
          {`${product?.price.toLocaleString('ko-KR')} ₩`}
        </div>
        <div className='mb-6 text-xs text-slate-500'>
          {product?.description}
        </div>
        <button
          disabled={inCart}
          onClick={handleClickAddProduct}
          className='disabled:bg-slate-400 disabled:text-white w-fit px-4 py-1 border-2 border-slate-200 text-slate-700 rounded-md hover:bg-slate-400 hover:text-white mr-8'
        >
          {inCart ? '장바구니에 담긴 제품' : '장바구니에 담기'}
        </button>
        <Link
          to={'/cart'}
          className='w-fit px-4 py-1 border-2 border-slate-700 bg-slate-700 text-slate-200 rounded-md hover:bg-slate-400 hover:text-white'
        >
          장바구니로 이동
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
