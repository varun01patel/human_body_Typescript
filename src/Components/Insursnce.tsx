import React from 'react';
import InsuranceImg from '../assets/health.png';

const Insursnce: React.FC = () => {
  return (
    <div className='w-full p-4'>
      <div className='w-full h-24 bg-[rgb(224,241,244)] rounded-xl flex items-center my-2 relative'>
        <img src={InsuranceImg} className='w-16 h-16 ml-2' alt="Insurance" />
        <div className='description ml-4'>
          <h3 className='font-bold'>Insurance Coverage</h3>
          <p>Check your benefit and coverage</p>
        </div>
        <span className='absolute right-2 top-1'><i className="fa-solid fa-lock"></i></span>
      </div>
      <div className='w-full h-24 bg-[rgb(224,241,244)] rounded-xl flex items-center my-2 relative'>
        <img src={InsuranceImg} className='w-16 h-16 ml-2' alt="Insurance" />
        <div className='description ml-4'>
          <h3 className='font-bold'>Insurance Coverage</h3>
          <p>Check your benefit and coverage</p>
        </div>
        <span className='absolute right-2 top-1'><i className="fa-solid fa-lock"></i></span>
      </div>
    </div>
  );
}

export default Insursnce;
