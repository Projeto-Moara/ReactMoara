import Tema from '../../../models/Tema';
import temas from '../../../assets/navbar/temas.png'
interface CardTemaProps {
  tema: Tema
}

function CardTemas({ tema }: CardTemaProps) {
  return (
<<<<<<< HEAD
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-gradient-to-r from-[#02123E] via-[#06315E] to-[#02123E] rounded-lg drop-shadow-xl text-[white] font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema?.nome}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
      <div className="flex">
=======

    <div className="flex bg-[#121D13] displayCounteiner mt-[4%] items-center justify-center w-[65vw] h-[175px]">

      <div className='w-[13%] justify-center items-center'>
        <img className='flex w-[70px]' src={temas} alt="" />
      </div>

      <div className='flex flex-col justify-between w-[75%]'>
        <div className='p-8 text-3xl text-white h-full'><h2>{tema.nome}</h2></div>
        <hr />
        <div className='p-8 text-3xl text-white h-full'><p>{tema.descricao}</p></div>
      </div>


      {/* <div className="flex">
>>>>>>> eec3db7543fc5ed11972ba3086ddb39d5990e079
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-gradient-to-r from-green-500 to-blue-600   hover:from-blue-400 hover:to-green-400 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 bg-gradient-to-r from-[#FF7A00] to-[#ff1f1f] hover:from-[#FF7A00] hover:to-[#ffc41f] w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>

        <Link to={`/cadastroTema`} className='text-slate-100 bg-gradient-to-r from-[#FF7A00] to-[#ff1f1f] hover:from-[#FF7A00] hover:to-[#ffc41f] w-full flex items-center justify-center'>
          <button>cadastrartema</button>
        </Link>
      </div>  */}
    </div>
  )
}

export default CardTemas