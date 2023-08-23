import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";
import capa from '../../../assets/fundo_capa.png'
import '../../../global/global.css'
import { Link} from 'react-router-dom';




function NovaPostagem() {
    const { usuario } = useContext(AuthContext);
    return (
        <div className="w-[45vw] h-[28vh] mt-[5%] displayCounteiner">
            <img className='w-full h-[13vh] object-cover rounded-tr-[50px]' src={capa} alt="Capa do Perfil" />
            <div className=' flex fonte bg-[#121D13] text-gray-200  rounded-br-[50px] rounded-bl-[50px]  items-center justify-center'>
                <div className="flex h-[15vh] w-[45vw]">
                    <div className="flex justify-center w-[25%] ">
                        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-[100px] h-[100px] mt-[-50px] border-8 border-[#121D13] relative z-10' />
                    </div>
                    <div className="mt-[-15px] w-[70%] displayCounteiner justify h-[50%] rounded-full flex bg-[#213423]  hover:bg-[#314d34]"><Link to='/cadastroPostagem' className="ml-6 text-[115%] pt-[2.5%]">Escreva aqui uma nova postagem...</Link></div>
                </div>
            </div>
        </div>
    );
}

export default NovaPostagem