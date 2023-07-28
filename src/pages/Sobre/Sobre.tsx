
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/logo_animation.svg';
import './Sobre.css';

const Sobre = () => {
  let navigate = useNavigate()

  return (
      <div className="bg-[#80C0DA] flex justify-center flex flex-col w-full">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h1 className="text-white text-5xl m-4">Sobre Moara</h1>
            <p className="text-white text xl m-4">
            Moara é uma rede social para empresas, ongs e
            voluntários compartilharem ações sociais em prol da ODS 13 -
            Ação Climática, que visa melhorar a educação, aumentar a
            conscientização e a capacidade humana e institucional sobre
            adotar medidas urgentes para combater as alterações climáticas
            e os seus impactos.
          </p>
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