import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/logo_animation.svg';
import './Sobre.css';
import fundoSobre from '../../assets/folds_sparkles_blue.jpg';
import Carrossel from '../../components/carrossel/Carrossel';


const Sobre = () => {
  let navigate = useNavigate()

  return (
    <div className="fundoSobre  justify-center flex flex-col w-full">
      <div className="flex flex-col gap-4 items-center justify-center py-4">
        <h1 className="text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#f80303] animate-pulse m-4">Sobre Moara</h1>
        <p className="text-white text-2xl font-semibold text-center m-4">
          Moara é uma rede social para empresas, ongs e
          voluntários compartilharem ações sociais em prol da ODS 13 -
          Ação Climática, que visa melhorar a educação, aumentar a
          conscientização e a capacidade humana e institucional sobre
          adotar medidas urgentes para combater as alterações climáticas
          e os seus impactos.
        </p>
      </div>

      <div className="flex justify-center ">
            <Carrossel />
          </div>

      <div>
        <button type='submit'
          className='hover:underline mx-4'
          onClick={() => { navigate('/sobre') }}>
        </button>
      </div>

    </div>

  )
}

export default Sobre