import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='py-6 flex justify-center bg-slate-100 text-violet-700 text-4xl'>
      <Link to={'https://github.com/llddang'}>
        <IoLogoGithub />
      </Link>
    </div>
  );
};

export default Footer;
