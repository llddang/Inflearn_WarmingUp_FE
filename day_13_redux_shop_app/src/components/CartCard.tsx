import React from 'react';
import { productCartDto } from '../types';
import { useAppDispatch } from '../hooks/redux';
import {
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} from '../store/products.slice';

import { IoTrashOutline } from 'react-icons/io5';

const CartCard = ({ item }: { item: productCartDto }) => {
  const dispatch = useAppDispatch();

  const handleClickDecrement = () => {
    dispatch(decrementQuantity(item.id));
  };
  const handleClickIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };
  const handleClickRemove = () => {
    dispatch(removeProduct(item.id));
  };

  return (
    <div className='flex gap-4'>
      <img className='w-20 h-20' src={item.img} alt={item.name} />
      <div className='flex-1'>
        <div className='flex justify-between text-slate-400'>
          <span className='text-xs'>{item.type}</span>
          <IoTrashOutline
            className='text-lg cursor-pointer'
            onClick={handleClickRemove}
          />
        </div>
        <div className='text-lg'>{item.name}</div>
        <div className='text-sm flex justify-between items-end'>
          <span>{`${item.price.toLocaleString('ko-KR')} x ${item.quantity} = ${(
            item.price * item.quantity
          ).toLocaleString('ko-KR')} ₩`}</span>
          <div className='flex gap-2'>
            {item.quantity !== 1 && (
              <button
                onClick={handleClickDecrement}
                className='w-8 h-8 border-[1px] border-slate-400 rounded-lg'
              >
                -
              </button>
            )}
            <div className='cursor-default w-8 h-8 border-[1px] border-slate-400 rounded-lg text-center leading-8'>
              {item.quantity}
            </div>
            <button
              onClick={handleClickIncrement}
              className='w-8 h-8 border-[1px] border-slate-400 rounded-lg'
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
