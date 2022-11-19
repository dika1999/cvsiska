import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/logo-cvsiska.svg';

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index} style={{ fontSize: '1.5em', 
                marginRight: 5, color: '#f97316'}}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img src={Logo} alt='' />
          </div>
          <p className='text-paragraph opacity-100 text-[15px]'>
            &copy; 2022 CV SISKA . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
