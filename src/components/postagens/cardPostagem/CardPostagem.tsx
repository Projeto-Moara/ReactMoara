import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import Comentarios from '../../comentarios/Comentarios';
import '../../../global/global.css'
import { AuthContext } from '../../../contexts/AuthContext';

interface CardPostagemProps {
  post: Postagem
  curtir: (id: number) => void
}

function CardPostagem({ post, curtir }: CardPostagemProps) {

  const { usuario } = useContext(AuthContext);

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

    <div className='fonte'>
      <div className="">
        <header className="flex">
          <div>
            <div>
              <img src={post.usuario?.foto} alt="user name" title="user name" className=" w-[50px] h-[50px] rounded-[50px]" />
            </div>

          </div>


          <div>
            <h3 className="">{post.usuario?.nome}</h3>
            <p className="text-sm text-slate">
              Data: {new Intl.DateTimeFormat(undefined, {
                dateStyle: 'full',
                timeStyle: 'medium',
              }).format(new Date(post.data))}</p>
          </div>
        </header>
      </div>

      <figure>
        <img src={post.foto} alt='card imagem' className="flex justify-center w-[700px] h-[400px] "></img>
      </figure>

      <div className="p-6 h-50">
        <p>Título: {post.titulo}</p>
        <p>Tema: {post.tema?.descricao}</p>
      </div>
      <div className="p-2">
        <p>{post.texto}</p>
      </div>

      <div className="flex justify-center gap-2 p-2 pt-0">
        <div className="flex">


          {usuario.id === post.usuario?.id ?
            <>
              <Link to={`/editarPostagem/${post.id}`}>
                <button className='rounded outline w-[100px] text-slate-100 bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-400 hover:to-green-400 flex items-center justify-center mt-2.5 mr-1'>Editar</button>
              </Link>
              <Link to={`/deletarPostagem/${post.id}`}>
                <button className="rounded outline w-[100px] text-slate-100 bg-gradient-to-r from-[#FF7A00] to-[#ff1f1f] hover:from-[#FF7A00] hover:to-[#ffc41f] flex items-center justify-center mt-2.5 mr-1">Deletar</button>
              </Link>
            </>

            : 

            <></>
          }


        </div>


        <button className="">
          <span className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" role="graphics-symbol" aria-labelledby="title-82 desc-82">
              <title id="title-82">Icon title</title>
              <desc id="desc-82">A more detailed description of the icon</desc>
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </span>
        </button>

        <button onClick={() => { curtir(post.id) }} className="">
          <span className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" role="graphics-symbol" aria-labelledby="title-81 desc-81">
              <title id="title-81">Icon title</title>
              <desc id="desc-81">A more detailed description of the icon</desc>
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
        </button>
        {post.curtir}



      </div>

      <div className="">
        <header className="">
          <div className=''>
            <strong className='text-center'>Comentários</strong>
            <div className='flex flex-col'>
              {comentarios.map(comentario => {
                return (
                  <Comentarios conteudo={comentario} />
                )
              })}
              <br />
            </div>
          </div>
        </header>
      </div>
    </div>

  )
}

export default CardPostagem