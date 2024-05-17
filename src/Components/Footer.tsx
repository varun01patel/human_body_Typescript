import React from 'react';

const Footer: React.FC = () => {
  return (
    <div
      style={{ boxShadow: '0 -3px 2px 0px rgb(0 0 0 /0.1)' }}
      className='flex justify-center items-center gap-10 text-black bg-white mb-2 py-3'
    >
      <div className='flex flex-col justify-center items-center gap-2'>
        <i className="fa-solid fa-house"></i>
        <h1>Home</h1>
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        <i className="fa-regular fa-heart"></i>
        <h1>Care</h1>
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        <i className="fa-solid fa-shield-halved"></i>
        <h1>Coverage</h1>
      </div>
      
      <div className='flex flex-col justify-center items-center gap-2'>
        <i className="fa-solid fa-file-shield"></i>
        <h1>Claim</h1>
      </div>
    </div>
  );
}

export default Footer;
