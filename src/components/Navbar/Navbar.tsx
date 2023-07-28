import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {


  return (
    <>
     <div className='w-full bg-[#e8ee70] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase text-[#024D78]'>Moara</div>

            <div className='flex gap-4'>
              <div className='hover:underline text-[#024D78]'>
                <Link to='/home' className='hover:underline'>Home</Link>
              </div>
              <div className='hover:underline text-[#024D78]'>
                <Link to='/login' className='hover:underline'>Login</Link>
              </div>
              <div className='hover:underline text-[#024D78]'>
                <Link to='/sobre' className='hover:underline'>Sobre</Link>
              </div>
              <div className='hover:underline text-[#024D78]'>Postagens</div>
              <div className='hover:underline text-[#024D78]'>Temas</div>
              <div className='hover:underline text-[#024D78]'>Cadastrar tema</div>
              <div className='hover:underline text-[#024D78]'>Perfil</div>
              <div className='hover:underline text-[#024D78]'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar