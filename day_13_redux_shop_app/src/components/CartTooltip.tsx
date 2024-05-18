import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../hooks/redux';
import CartTooltipCard from './CartTooltipCard';
import { Link } from 'react-router-dom';

const CartTooltip = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const cartProduct = useAppSelector((state) => state.product).products;

  useEffect(() => {
    let price = 0;
    cartProduct.forEach((item) => {
      price = price + item.price * item.quantity;
    });
    setTotalPrice(price);
  }, [cartProduct]);

  return (
    <div className='w-[300px] p-3 left-[-280px] top-5 absolute border-[1px] bg-white border-slate-200 rounded-lg shadow-sm'>
      <div className='flex flex-col gap-2'>
        {cartProduct.map((item) => (
          <CartTooltipCard key={item.id} item={item} />
        ))}
      </div>
      <div className='my-3 font-bold text-lg text-right text-slate-950'>
        {`합계: ${totalPrice.toLocaleString('ko-KR')}₩`}
      </div>
      <div className='flex justify-center'>
        <Link to={'/cart'} className='text-base text-center text-slate-950'>
          장바구니로 이동
        </Link>
      </div>
    </div>
  );
};

export default CartTooltip;
