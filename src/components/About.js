import React from 'react';

// import img
import Image from '../assets/img/tentangkami.webp';

const About = () => {
  return (
    <section className='section bg-tertiary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Tentang Kami
              </h2>
              <h3 className='mb-4 text-accent text-1.5xl font-semibold'>
                CV SISKA
              </h3>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Perusahaan kami bergerak di bidang jasa
                konstruksi, pengadaan barang atau supplier, 
                yang mengedepankan kejujuran dengan penuh tanggung jawab.
              </p>
            </div>
            <a href='https://wa.me/62082334659838'> 
              <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                Hubungi kami
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
