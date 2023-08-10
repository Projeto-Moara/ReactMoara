import homeLogo from '../../assets/moaraLogo2.jpg';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import Carrossel from '../../components/carrossel/Carrossel';

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#02123E] via-[#06315E] to-[#02123E]">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
            <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <Link to='/postagens' className='rounded bg-gradient-to-r from-green-500 to-blue-600 hover:from-[#FF7A00] hover:to-[#ffc41f] Hover me py-2 px-4'>Ver postagens</Link>
            </div>
          </div>

          <div className="flex py-8 bg-repeat">
          <img src={homeLogo} alt="Logo Moara" className=' min-w-full h-[65vh]' />
          </div>
          
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;