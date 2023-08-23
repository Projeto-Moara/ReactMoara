import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'
import capa from '../../assets/fundo_capa.png'
import '../../global/global.css'

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
    <div className=' displayCounteiner mt-[4%]'>

      <img className='w-full h-72 object-cover rounded-tr-[50px]' src={capa} alt="Capa do Perfil" />

      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='object-cover rounded-full w-[200px] h-[200px] mx-auto mt-[-8rem] border-8 border-[#121D13] relative z-10' />

      <div className="fonte relative mt-[-6rem] h-72 flex flex-col bg-[#121D13] rounded-br-[50px] rounded-bl-[50px] text-white text-2xl items-center text-justify  justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
    </div>
  )
}

export default Perfil