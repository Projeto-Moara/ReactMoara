import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import Comentarios from '../../comentarios/Comentarios';
interface CardPostagemProps {
  post: Postagem
  curtir: (id: number) => void
}

function CardPostagem({ post, curtir }: CardPostagemProps) {
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

    <div className='border-2 border-[#02123E] flex flex-col rounded-2xl overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-gradient-to-r from-[#02123E] via-[#06315E] to-[#02123E] rounded-lg drop-shadow-xl text-[white] font-bold text-2xl py-2 px-4 items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase'>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg text-[#FF7A00] font-semibold uppercase'>{post.titulo}</h4>
          <p>Tema: {post.tema?.descricao}</p>
          <br />
          <p>{post.texto}</p>
          <br />
          <img src={post.foto} alt=''></img>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
            dateStyle: 'full',
            timeStyle: 'medium',
          }).format(new Date(post.data))}</p>
        </div>
      </div>

      <div className="flex">
        <Link to={`/editarPostagem/${post.id}`} className='w-full text-slate-100 bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-400 hover:to-green-400 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-slate-100 bg-gradient-to-r from-[#FF7A00] to-[#ff1f1f] hover:from-[#FF7A00] hover:to-[#ffc41f] w-full flex items-center justify-center '>
          <button>Deletar</button>
        </Link>
      </div>

      <div className='container flex flex-col items-center py-4 text-bold text-red-700'>
        <div className='bg-red-700 hover:bg-orange-400 text-white font-bold py-0 px-6 rounded outline'>
          <button onClick={() => { curtir(post.id) }}> ♥️ {post.curtir}</button>
        </div>
      </div>


      <strong className='text-center'>Comentários</strong>
      <div className='flex flex-col text-center'>
        {comentarios.map(comentario => {
          return (
            <Comentarios conteudo={comentario} />
          )
        })}
        <br />
      </div>

      <form onSubmit={criarNovoComentario} className='flex flex-col'>
        <strong className='text-center'>Deixe seu feedback também:</strong>
        <textarea
          className='line-clamp-3 text-center'
          name='comment'
          placeholder='Deixe seu comentário'
          value={novoComentarioTexto}
          onChange={atualizarNovoComentario}
          required
        />
        <footer className='text-center'>
          <button type="submit" className='bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-400 hover:to-green-400 text-white font-bold py-0 px-6 rounded outline'>Publicar</button>
        </footer>
        <br />
      </form>


    </div>
  )
}

export default CardPostagem