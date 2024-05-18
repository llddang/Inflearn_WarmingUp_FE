import React from 'react';
import { productCartDto } from '../types';
import { useAppDispatch } from '../hooks/redux';
import { removeProduct } from '../store/products.slice';

import { IoTrashOutline } from 'react-icons/io5';

const CartTooltipCard = ({ item }: { item: productCartDto }) => {
  const dispatch = useAppDispatch();

  const handleClickRemove = () => {
    dispatch(removeProduct(item.id));
  };

  return (
    <div className='flex gap-2'>
      <img className='w-14 h-14' src={item.img} alt={item.name} />
      <div className='flex-1'>
        <div className='flex justify-between text-slate-400'>
          <span className='text-xs'>{item.type}</span>
          <IoTrashOutline
            className='text-lg cursor-pointer'
            onClick={handleClickRemove}
          />
        </div>
        <div className='text-base text-slate-950'>{item.name}</div>
        <div className='text-xs text-slate-600'>{`${item.price.toLocaleString(
          'ko-KR'
        )} x ${item.quantity} = ${(item.price * item.quantity).toLocaleString(
          'ko-KR'
        )} ₩`}</div>
      </div>
    </div>
  );
};

export default CartTooltipCard;
