import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [show, setShow] = useState(false);

  const listener = () => {
    if (window.scrollY > 50) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <HeaderWrapper bg={show ? '#090b13' : 'transparent'}>
      <Logo>
        <Image
          alt='Pokemon Logo'
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
          onClick={() => (window.location.href = '/')}
        />
      </Logo>
      <FaUserCircle
        className={`w-8 h-8 ${show ? 'text-white' : 'text-black'}`}
      />
    </HeaderWrapper>
  );
};

const Logo = styled.a`
  padding: 0;
  width: 48px;
`;
const Image = styled.img`
  cursor: pointer;
  width: 100%;
`;

const HeaderWrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  height: 60px;
  display: flex;
  background-color: ${(props) => props.bg};
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
`;

export default Header;
