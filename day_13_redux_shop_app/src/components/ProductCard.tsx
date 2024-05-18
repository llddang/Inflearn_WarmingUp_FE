import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productDto } from '../types';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addProduct } from '../store/products.slice';

const ProductCard = ({ item }: { item: productDto }) => {
  const [inCart, setInCart] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const cartProduct = useAppSelector((state) => state.product).products;

  console.log(cartProduct);

  useEffect(() => {
    cartProduct.forEach((prod) => {
      if (prod.id === item.id) setInCart(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProduct]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addProduct({ ...item, quantity: 1 }));
  };

  return (
    <Link
      to={`/product/${item.id}`}
      className='w-[100%] max-w-[200px] border-[1px] border-slate-200 rounded-lg p-4 flex flex-col items-center gap-2'
    >
      <img className='h-40' src={item.img} alt={item.name} />
      <div className='w-[80%] text-center truncate'>{item.name}</div>
      <div className='w-full text-xs flex flex-col items-end gap-1'>
        <span className='px-1'>{`${item.price.toLocaleString(
          'ko-KR'
        )} ₩`}</span>
        <button
          disabled={inCart}
          onClick={handleClick}
          className='disabled:bg-slate-200 disabled:text-white px-4 py-1 border-2 border-slate-200 rounded-md hover:bg-slate-400 hover:text-white'
        >
          {inCart ? '장바구니에 담긴 제품' : '장바구니에 담기'}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
