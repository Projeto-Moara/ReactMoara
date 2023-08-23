import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import Bate_papo from '../../components/chat/Bate_papo';
import './Home.css';
import '../../global/global.css';

function Home() {
  return (
    <div className="grid gap-12 grid-cols-12">

      <div className="col-span-8"><ListaPostagens /></div>
      <div className="col-span-4"><Bate_papo /></div>
    </div>
  );
}

export default Home;