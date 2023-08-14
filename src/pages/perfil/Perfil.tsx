import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'
import logoLogin from '../../assets/florest.png';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Perfil() {
  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Você precisa estar logado', 'info')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden place-items-end gap-4 columns-[10rem]'>
      <img className='w-full h-[70px] object-cover border-b-6 border-white' src={logoLogin} alt="Capa do Perfil" />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full h-65 w-35 mx-auto mt-[-2rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-[#02123E] text-white text-2xl items-center justify-center">
        <br />
        <br />
        <div className="relative mt-[-6rem] h-25 flex flex-col bg-[#02123E] text-white text-2xl items-center ">
          <p className="font-mono font-extrabold text-xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#ffc41f]"> {usuario.nome} </p>
          <p className="text-xs uppercase bg-clip-text text-white">Email: {usuario.usuario}</p>
        </div>
      </div>


      <ModalPostagem />



      <div className=' text-white text-base py-2 grid-rows-1 md:col-span-4 lg:col-span-1'>
        <button className='rounded bg-gradient-to-r from-green-500 to-blue-600 hover:from-[#FF7A00] hover:to-[#ffc41f] Hover me py-2 px-8'><p className='list-disc text-center'>Conexões</p> </button>
      </div>

      <div className=' text-white text-base items-center py-2'>
        <button className='rounded bg-gradient-to-r from-green-500 to-blue-600 hover:from-[#FF7A00] hover:to-[#ffc41f] Hover me py-2 px-9'><p className='list-disc text-center'>Eventos</p> </button>
      </div>



    </div>
  )
}

export default Perfil