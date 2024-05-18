import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

import { IoCartOutline, IoPersonOutline, IoExitOutline } from 'react-icons/io5';
import CartTooltip from './CartTooltip';

const Header = () => {
  const [productCount, setProductCount] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const cartProduct = useAppSelector((state) => state.product).products;

  useEffect(() => {
    setProductCount(cartProduct.length);
  }, [cartProduct]);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='px-10 py-4 shadow-[0_0_10px_0_rgba(0,0,0,0.3)] text-violet-700 flex justify-between items-center text-2xl'>
      <Link to={'/'} className='font-bold'>
        Shop
      </Link>
      <div className='flex gap-3'>
        <Link
          to={'/cart'}
          className='relative'
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {productCount !== 0 && (
            <>
              <div className='w-4 h-4 leading-4 text-center rounded-full absolute text-sm top-[-8px] right-[-8px] bg-slate-700 text-white'>
                {productCount}
              </div>
              {isHovering && <CartTooltip />}
            </>
          )}
          <IoCartOutline />
        </Link>
        <IoPersonOutline />
        <IoExitOutline />
      </div>
    </div>
  );
};

export default Header;
