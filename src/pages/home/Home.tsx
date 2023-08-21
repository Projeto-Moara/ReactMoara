import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import '../../global/global.css';
import Bate_papo from '../../components/chat/Bate_papo';

function Home() {
  return (
<div className="fundoVerde-2 fonte">
            <div className="flex grid-cols-3 gap-4 m-auto">
                <div className="grid-cols-3 lg:col-span-3"><Navbar /></div>
                <div className="grid-cols-3 lg:col-span-3"><ListaPostagens /></div>
                <div className="grid-cols-3 lg:col-span-3"><Bate_papo /></div>
            </div>
            <Footer/>
        </div>
        
  );
}

export default Home;