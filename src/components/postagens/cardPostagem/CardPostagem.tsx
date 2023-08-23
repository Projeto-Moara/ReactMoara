import { ChangeEvent,  useContext, useState } from 'react';
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
  function criarNovoComentario(event: React.KeyboardEvent<HTMLElement>) {

    if(event.key === 'Enter'){
      setComentarios([...comentarios, novoComentarioTexto])
      setNovoComentarioTexto('')
    }

  }

    // Função que pega o texto do novo comentário
    function atualizarNovoComentario(event: ChangeEvent<HTMLTextAreaElement>) {
      setNovoComentarioTexto(event.target.value)
    }

    return (
      <div className='fonte bg-[#121D13] text-gray-200 displayCounteiner-2 h-[90bh] w-[38vw] mt-[4%] items-center  '>
        <div className="flex p-5 w-[40vw] h-[13vh] ">
          <div className='w-[12%]'>
            <img src={post.usuario?.foto} alt="user name" title="user name" className="flex w-[50px] h-[50px] rounded-[50px]" />
          </div>
          <div className='w-[80%]'>
            <h3 className="flex text-[115%]">{post.usuario?.nome}</h3>
            <p className="">
              Data: {new Intl.DateTimeFormat(undefined, {
                dateStyle: 'full',
                timeStyle: 'medium',
              }).format(new Date(post.data))}</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col items-center">
          <div className='py-[2%]'>
            <p className='text-[115%]'>Título: {post.titulo}</p>
            <p className='text-[115%]'>Tema: {post.tema?.descricao}</p>
          </div>
          <div>
            <img src={post.foto} alt='card imagem' className="flex justify-center h-[50vh] w[100%]"></img>
          </div>
        </div>

        <div className="p-5">
          <p>{post.texto}</p>
        </div>
        <hr />
        <div className="pt-[%] px-5 flex flex-col">
          <div className='flex flex-col '>
            <p className=''>Comentários</p>
          </div>
          <div className='flex flex-col'>
            {comentarios.map(comentario => {
              return (
                <Comentarios conteudo={comentario} />
              )
            })}
            <br />
          </div>
        </div>

        <div className="flex p-2">
          <div className='px-4 flex w-[550px]'>
            <button onClick={() => { curtir(post.id) }} className="">
              <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" role="graphics-symbol" aria-labelledby="title-81 desc-81">
                  <title id="title-81">Icon title</title>
                  <desc id="desc-81">A more detailed description of the icon</desc>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
            </button>
            <div className='px-2'>{post.curtir}</div>
            <div className="flex w-[75%]">

                <textarea
                  className="p-[8px] rounded-[40px] bg-[#121D13] border focus:border-white focus:bg-[#121D13]focus:outline-none text-white pl-[20px]"
                  name="comment"
                  placeholder="Comente aqui..."
                  value={novoComentarioTexto}
                  onChange={atualizarNovoComentario}
                  onKeyDown={criarNovoComentario}
                  required
                />

            </div>
            <div className="flex ">
            {usuario.id === post.usuario?.id ?
              <>
                <div className='flex'>
                <Link to={`/editarPostagem/${post.id}`}>
                  <button className='w-[6vw] h-[8vh] rounded-[25px] text-[90%] bg-[#213423] text-white justify-center cursor-pointer  items-center'>Editar</button>
                </Link>
                </div>
                <div className='flex ml-5'>
                  <Link to={`/deletarPostagem/${post.id}`}>
                  <button className="w-[6vw] h-[8vh] rounded-[25px] text-[90%] px-[30px] bg-[#213423] text-white flex justify-center cursor-pointer items-center">Deletar</button>
                </Link>
                </div>
              </>




              :

              <></>
            }
          </div>
          </div>
        </div>
      </div>

    )
  }

  export default CardPostagem