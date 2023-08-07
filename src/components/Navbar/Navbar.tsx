import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


function Navbar() {
 
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
 

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Moara</div>

            <div className='flex gap-4'>

              <div className='hover:underline'>
                <Link to='/home' className='hover:underline'>Home</Link>
              </div>

              <div className='hover:underline'>Postagens</div>

              <Link to='/temas' className='hover:underline'>Temas</Link>
              
              <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>

              <div className='hover:underline'>
                <Link to='/sobre' className='hover:underline'>Sobre</Link>
              </div>

              <div className='hover:underline'>Perfil</div>

              <div className='hover:underline'>
                <Link to='' onClick={logout} className='hover:underline m-4'>Sair</Link>
              </div>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar