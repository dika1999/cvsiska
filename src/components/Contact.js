import React from 'react';

// import contact data
import { contact } from '../data';


const Contact = () => {
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Hubungi Kami
          </h2>
          <p className='subtitle'>
            Jangan ragu untuk menghubungi kami, karena kami selalu ada solusi untuk bisnis anda.
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, email, nohp1, nohp2} = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{email}</p>
                    <a className='text-accent font-normal ' href='https://wa.me/62087703382260'>{nohp1}</a><br/>
                    <a className='text-accent font-normal ' href='https://wa.me/62082234248114'>{nohp2}</a>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Nama Anda' />
              <input className='input' type='email' placeholder='Email Anda' />
            </div>
            <input className='input' type='text' placeholder='Subjek' />
            <textarea
              className='textarea'
              placeholder='Tulis Pesan'
            ></textarea>
            <button className='btn btn-lg bg-accent hover:bg-secondary-hover'>
              Kirim pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
