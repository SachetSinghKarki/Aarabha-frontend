import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Landingpage = () => {
  return (
    <div className='flex flex-col justify-center items-start h-screen px-10'>
      <h1 className='text-5xl font-semibold max-w-lg mb-4'>
        Stay ahead of the curve with our forward-thinking
      </h1>
      <p className='max-w-lg mt-5 text-zinc-500'>
        An award-winning SEO agency with disciplines in digital marketing, design, and website development. Focused on understanding you.
      </p>
      <div className='flex items-center mt-5'>
        <button className='px-8 py-3 border border-black text-white bg-black rounded-3xl flex items-center justify-center'>
          Schedule Call
          <FaArrowRight className='ml-2' />
        </button>
        <p className='ml-4 underline cursor-pointer'>View Case Study</p>
      
      </div>
      <p className='mt-[10vh] font-semibold' style={{ maxWidth: '20ch' }}>
        Trusted by the world's biggest brands
      </p>
      <div className='w-full border-t mt-[10vh] border-gray-300 mt-10'></div>
    </div>
  );
}

export default Landingpage;
