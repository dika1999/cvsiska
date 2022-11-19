import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <h3 className='font-regular capitalize text-accent text-m mb-3'>{item.category}</h3>
      <p className='text-1.5xl font-semibold capitalize mb-3'>{item.name}</p>
    </div>
  );
};

export default Project;
