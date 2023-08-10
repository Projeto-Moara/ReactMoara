import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import { toastAlerta } from '../../util/toastAlerta'

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
      <div className="grid h-screen place-items-center fundoLogin">
        <form className='max-w-[700px] mx-auto flex-col gap-4 form-container w-1/1 bg-gradient-to-r from-[#02123E] via-[#06315E] to-[#02123E] rounded-lg drop-shadow-xl' onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-[#FF7A00] text-5xl '>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-white">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-white">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-white">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-white">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-white">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button className='rounded bg-gradient-to-r from-[#FF7A00] to-[#ff1f1f] hover:from-[#FF7A00] hover:to-[#ffc41f]  text-white w-1/2 py-2 flex justify-center' onClick={back}>
              Cancelar
            </button>
            <button className='rounded bg-gradient-to-r from-green-500 to-blue-600   hover:from-blue-400 hover:to-green-400  text-white w-1/2 py-2 flex justify-center' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro