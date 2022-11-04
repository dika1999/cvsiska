import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            Layanan Kami
          </h1>
          <p className='subtitle'>
            Berikut daftar jasa yang kami sediakan untuk anda.
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name} = service;
            return (
              <div className='bg-secondary p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-12 h-12 aligment-center items-center mb-18 text-[28px]'>
                  {icon}
                </div>
                <h5 className='text-xl font-medium mb-2 aligment-center'>{name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
