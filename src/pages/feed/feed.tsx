import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import Chat from "../../components/chat/Bate_papo";

function Feed(){
    return (
        <div className="fundoVerde fonte">
            <div className="container px-6 m-auto">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12"></div>
                <div className="col-span-4 lg:col-span-3"><Navbar /></div>
                <div className="col-span-4 lg:col-span-3"><ListaPostagens /></div>
                <div className="col-span-4 lg:col-span-3"><Chat /></div>
                <div className="col-span-4 lg:col-span-3"><Footer /></div>
            </div>
        </div>
        );
      }
      
export default Feed;