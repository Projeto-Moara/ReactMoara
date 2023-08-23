import { useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import Moara from '../../assets/SideBar.png';
import sobre from '../../assets/navbar/sobre.png';
import criar_postagem from '../../assets/navbar/criar_postagem.png'
import eventos from '../../assets/navbar/eventos.png'
import sair from '../../assets/navbar/logout.png'
import temas from '../../assets/navbar/temas.png'


function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso')
    navigate('/login')
  }

  let navbarComponent

  // if (usuario.token !== "") {
    navbarComponent = (
      <div className=' mt-[10%] h-[90vh] displayCounteiner-2 flex flex-col p-[2%] bg-[#121D13]'>

        <div className='flex justify-center'>
          <Link to='/home' className='w-[80%]'><img src={Moara} alt="Logo e Tipografia Moara" /></Link> 
        </div>

        <div className='mt-[1%] flex flex-col items-center'>

          <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'> 
            <div className='w-[25%]'>
              <img className='flex w-[40px] h-[40px] rounded-[50px]' src={usuario.foto} alt="Foto de perfil do Usuario" />
            </div>
            <div className='w-[75%]'>
              <Link to='/perfil' className='text-white ml-[5%] text-[75%]'>{usuario.nome}</Link>
            </div>
          </div>
          <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
            <div className='w-[25%]'>
              <img className='flex w-[30px] h-[30px]' src={sobre} alt="Foto de perfil do Usuario" />
            </div>
            <div className='w-[75%]'>
              <Link to='/sobre' className='text-white ml-[5%] fonteSize'>Sobre</Link>
            </div> 
          </div>

          <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
            <div className='w-[25%]' >
              <img className='flex w-[30px] h-[30px]' src={eventos} alt="Foto de perfil do Usuario" />
            </div>
            <div className='w-[75%]'>
              <Link to='/eventos' className='text-white ml-[5%] fonteSize'>Eventos</Link>
            </div>
          </div>

          <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
            <div className='w-[25%]'>
              <img className='flex w-[30px] h-[30px]' src={temas} alt="Foto de perfil do Usuario" />
            </div>
            <div className='w-[75%]'>
              <Link to='/temas' className='text-white ml-[5%] fonteSize'>Temas</Link>
            </div>
          </div>

          <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
            <div className='w-[25%]'>
              <img className='flex w-[30px] h-[30px]' src={criar_postagem} alt="Foto de perfil do Usuario" />
            </div>
            <div className='w-[75%]'>
              <Link to='/cadastroPostagem' className='text-white ml-[5%] text-[80%]'>Criar Postagem</Link>
            </div>
          </div>
          <div className= 'w-[80%] mt-[2%] border-t-[2px] '>
            <div className='flex justify-center cursor-pointer items-center py-[8%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-[#72A9E3] fonteSize hover:no-underline'>
              <img className='flex w-[40-px] h-[40px]' src={sair} alt="Foto de perfil do Usuario" />
              <Link to='' onClick={logout} className='text-[#72A9E3] ml-[5%] fonteSize'>Logout</Link>
            </div>
          </div>

        </div>
      </div>
    )
  // }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar