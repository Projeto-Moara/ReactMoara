import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import Comentarios from '../../comentarios/Comentarios'

interface CardPostagemProps {
  post: Postagem
  curtir: (id: number) => void
}

function CardPostagem({post, curtir}: CardPostagemProps) {
   // Inicia o campo de Comentarios com um Comentário Generico
   const [comentarios, setComentarios] = useState([
    'Post muito bacana, hein?! 👏👏'
])

// State que usaremos para pegar o texto dos novos Comentários
const [novoComentarioTexto, setNovoComentarioTexto] = useState('')

// Função que vai pegar os novos comentários digitados e adiciona ao State
function criarNovoComentario(event: FormEvent) {
    event.preventDefault()
    setComentarios([...comentarios, novoComentarioTexto])
    setNovoComentarioTexto('')
}

// Função que pega o texto do novo comentário
function atualizarNovoComentario(event: ChangeEvent<HTMLTextAreaElement>) {
    setNovoComentarioTexto(event.target.value)
}

  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
          <p>{post.texto}</p>
          <p>Tema: {post.tema?.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
        <button onClick={() => { curtir(post.id) }}>curtir</button>
        <p>{ post.curtir }</p>
       

      <form onSubmit={criarNovoComentario} className='flex flex-col'>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe seu comentário'
                    value={novoComentarioTexto}
                    onChange={atualizarNovoComentario}
                    required
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div>
                {comentarios.map(comentario => {
                    return (
                        <Comentarios conteudo={comentario} />
                    )
                })}
            </div>
    </div>
  )
}

export default CardPostagem