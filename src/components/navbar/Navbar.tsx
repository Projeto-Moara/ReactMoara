import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import Moara from '../../assets/SideBar.png';


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
      <div className='flex flex-col w-[20vw] .displayCounteiner-2 p-[1%] bg-[#121D13]'>
        <div className='flex justify-center'>
          <img className='w-[80%]' src={Moara} alt="Tipografia Bate-papo" />
        </div>
        <div className='flex flex-col items-center'>
          <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] items-center'>
            <Link to='/perfil' className='text-white ml-[5%] fonteSize'>Perfil</Link>
          </div>
          <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%]'>
            <Link to='/sobre' className='text-white ml-[5%] fonteSize'>Sobre</Link>
          </div>
          <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%]'>
            <Link to='/eventos' className='text-white ml-[5%] fonteSize'>Eventos</Link>
          </div>
          <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%]'>
            <Link to='/temas' className='text-white ml-[5%] fonteSize'>Temas</Link>
          </div>
          <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%]'>
            <Link to='/sobre' className='text-white ml-[5%] fonteSize'>Postagem</Link>
          </div>
          <div className= 'justify-center cursor-pointer m-[3%]'>
            <Link to='' onClick={logout} className='text-[#72A9E3] ml-[5%] fonteSize'>Logout</Link>
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