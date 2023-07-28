import React from 'react';
import homeLogo from '../../assets/logo_animation.svg'
import { useNavigate, Link } from 'react-router-dom'
import './Home.css';

function Home() {
    return (
        <>
        <div className="bg-[#80C0DA] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;


/*function Home() {
    return (
        <>
        <div className="bg-[#80C0DA] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold text-[#024D78]'>Seja bem-vindos!</h2>
              <p className='text-xl text-[#024D78]'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded text-white py-2 px-4 bg-[#024D78]'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={logo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;*/