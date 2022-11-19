import React from 'react';

// import woman image
import WomanImg from '../assets/img/banner-hero.webp';

// import brosur 
import Brosur from '../assets/img/CVSISKA-Brosur.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <h5 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[2] font-bold md:tracking-[-2px] text-red' style={{color: '#f97316'}}>
              CV SISKA
            </h5>
            <h5 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-4.5xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Mechanical Electrical, <br />
              Civil Contractor <br /> 
              & Supplier.  
            </h5>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Perusahaan kami bergerak di bidang jasa konstruksi, serta pengadaan barang atau supplier.
            </p>
            <a href={Brosur} download='Brosur CV Siska'>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Download Profil Perusahaan
            </button>
            </a>
          </div>
          <div>
            <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
