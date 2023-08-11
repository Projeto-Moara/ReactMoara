import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import Moara from '../../assets/moara_logo.png';


function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso')
    navigate('/login')
  }

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full bg-gradient-to-r from-[#02123E] via-[#06315E] to-[#02123E] text-white text-2xl font-bold flex justify-center py-4'>
        <div className="container flex justify-between text-lg ">
          <div className="container flex">
            <img src={Moara} alt="Logo Moara" width={70} />
            <Link to='/home' className='text-3xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#ffc41f] animate-pulse m-4'>Moara</Link>
          </div>

          <div className="container flex justify-end ml-30">
            <div className='flex gap-5 m-2'>
              <Link to='/postagens' className='hover:no-underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-[#FF7A00]'>Postagens</Link>
              <Link to='/temas' className='hover:no-underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-[#FF7A00]'>Temas</Link>
              <Link to='/cadastroTema' className='hover:no-underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-[#FF7A00]'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:no-underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-[#FF7A00]'>Perfil</Link>
              <Link to='/sobre' className='hover:no-underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-[#FF7A00]'>Sobre</Link>
              <Link to='' onClick={logout} className='hover:no-underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-[#FF7A00]'>Sair</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar