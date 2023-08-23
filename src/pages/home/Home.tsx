import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import Bate_papo from '../../components/chat/Bate_papo';
import './Home.css';
import '../../global/global.css';
import NovaPostagem from '../../components/postagens/formularioPostagem/FormularioPostagemHome';

function Home() {
  return (
    <div className="grid gap-12 grid-cols-12">
      <div className="col-span-8">
        <div>
          <div><NovaPostagem /></div>
          <div><ListaPostagens /></div>
        </div>
        
      </div>
      <div className="col-span-4"><Bate_papo /></div>
    </div>
  );
}

export default Home;