import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

import { resetCart } from '../store/products.slice';
import CartCard from '../components/CartCard';

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const dispatch = useAppDispatch();
  const cartProduct = useAppSelector((state) => state.product).products;

  useEffect(() => {
    let price = 0;
    cartProduct.forEach((item) => {
      price = price + item.price * item.quantity;
    });
    setTotalPrice(price);
  }, [cartProduct]);

  const handleSubmit = () => {
    dispatch(resetCart());
  };

  return (
    <div className='p-4 flex flex-col items-center gap-8'>
      <h1 className='font-bold text-2xl'>장바구니</h1>
      <div className='w-full flex flex-col gap-2'>
        {cartProduct.map((item) => {
          return <CartCard key={item.id} item={item} />;
        })}
        {cartProduct.length === 0 && (
          <div className='text-center m-8 text-lg'>장바구니가 비었습니다.</div>
        )}
      </div>
      <div className='w-full flex justify-end gap-10 text-lg'>
        <div className='cursor-default p-4 rounded-lg bg-slate-100'>
          {`합계: ${totalPrice.toLocaleString('ko-KR')}₩`}
        </div>
        <button
          onClick={handleSubmit}
          className='p-4 rounded-lg border-2 border-slate-100'
        >
          계산하기
        </button>
      </div>
    </div>
  );
};

export default CartPage;
