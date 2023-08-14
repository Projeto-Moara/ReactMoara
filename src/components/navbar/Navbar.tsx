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
      <div className='w-full bg-[#02123E]  text-white text-2xl font-bold flex justify-content py-4'>
        <div className="container flex justify-between text-lg ">
          <div className="container flex">
            <img src={Moara} alt="Logo Moara" width={70} />
            <Link to='/home' className='text-3xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#ffc41f] animate-pulse m-4'>Moara</Link>
          </div>

          <div className="container flex justify-center ml-30 ">
            <div className="sticky ... py-1 rounded mr-5 mt-[5px] border-2 border-white h-[35px]">
              <div className="absolute pointer-events-none ... ">
                <svg className="absolute text-slate-10 h-5 w-5 text-white mt-1 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input type="text" placeholder="Pesquisar" className="... text-center bg-[#02123E]"></input>
            </div>


            <div className='flex gap-5 m-2'>
              <Link to='/temas' className='hover:no-underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-[#FF7A00]'>Temas</Link>
              <Link to='/cadastroTema' className='hover:no-underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-[#FF7A00]'>Cadastrar tema</Link>
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