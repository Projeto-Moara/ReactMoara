import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import '../../global/global.css'
import cadastro from '../../assets/Cadastrar.png'
import { toastAlerta } from '../../util/toastAlerta'
import voltarIMG from '../../assets/flecha 1.png'

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

      } catch (error) {
        toastAlerta('Erro ao cadastrar usuário', 'erro')
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="grid place-items-center fundoVerde fonte">
        <form className="md:h-[500px] md:w-[50vw] lg:h-[95vh] lg:w-[40vw] flex-col gap-4 form-container displayCounteiner bg-[#121D13]" onSubmit={cadastrarNovoUsuario}>
          <img src={cadastro} alt="Tipografia Cadastrar" />
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="ml-[20px] text-white">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="w-full p-[8px] rounded-[40px] bg-[#121D13] border focus:border-white focus:bg-[#121D13]focus:outline-none text-white pl-[20px]"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="ml-[20px] text-white">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="w-full p-[8px] rounded-[40px] bg-[#121D13] border focus:border-white focus:bg-[#121D13]focus:outline-none text-white pl-[20px]"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="ml-[20px] text-white">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="w-full p-[8px] rounded-[40px] bg-[#121D13] border focus:border-white focus:bg-[#121D13]focus:outline-none text-white pl-[20px]"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="ml-[20px] text-white">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="w-full p-[8px] rounded-[40px] bg-[#121D13] border focus:border-white focus:bg-[#121D13]focus:outline-none text-white pl-[20px]"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="ml-[20px] text-white">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="w-full p-[8px] rounded-[40px] bg-[#121D13] border focus:border-white focus:bg-[#121D13]focus:outline-none text-white pl-[20px]"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex-colun">
            <div className='flex items-center'>
              <button className="rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center displayCounteiner hover:bg-[#314d34]" type='submit'>
              Cadastrar
             </button>
            </div>
            <div className='flex justify-center cursor-pointer m-[10%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30 hover:no-underline' onClick={back}>
              <img src={voltarIMG} alt="Icone de voltar" className=' w-[25%] h-[25%]' />
              <button className='text-[#72A9E3] ml-[5%] fonteSize'>
              Voltar
              </button>
            </div>
      
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro