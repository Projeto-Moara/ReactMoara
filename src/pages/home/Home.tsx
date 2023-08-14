import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import Perfil from '../perfil/Perfil';

import Carrossel from '../../components/carrossel/Carrossel';

function Home() {
  return (
    <>
      <section>
        <div className="flex-box px-2 m-auto bg-gradient-to-r from-[#02123E] via-[#06315E] to-[#02123E]">

          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 text-white">
            <div className="font-mono col-span-4 lg:col-span-2 text-bold text-2xl text-center text-[#FF7A00] m-1 bg-[#02123E]">
              <Perfil />

            </div>

            <div className="col-span-4 lg:col-span-10 rounded">



              <Carrossel />


              <div className="flex justify-center ml-[310px]">
                <ListaPostagens />
              </div>
            </div>

          </div>
        </div>
      </section>



    </>
  );
}

export default Home;