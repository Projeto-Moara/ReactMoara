import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import '../../global/global.css';
import Bate_papo from '../../components/chat/Bate_papo';

function Home() {
  return (
    <div>
      <div className="fundoVerde-2">
        <div className=''>
          <Navbar/>
        </div>
        <div className=''>
          <Bate_papo />
        </div>
      </div>
    </div>
  );
}

export default Home;