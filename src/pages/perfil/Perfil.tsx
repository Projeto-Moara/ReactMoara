import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import loginLogo from '../../assets/Login.png'
import { toastAlerta } from '../../util/toastAlerta'


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
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-[#02123E] text-white text-2xl items-center justify-center">
        <p className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#ffc41f]">Nome: {usuario.nome} </p>
        <p className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#ffc41f]">Email: {usuario.usuario}</p>
      </div>
    </div>
  )
}

export default Perfil