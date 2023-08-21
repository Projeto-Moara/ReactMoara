import careca_tv from '../../assets/usuarios_chat/careca_tv.png';
import homem_baguncado from '../../assets/usuarios_chat/homem_baguncado.png';
import homem_padrao from '../../assets/usuarios_chat/homem_padrao.png';
import homem_padrao_ondulado from '../../assets/usuarios_chat/homem_padrao_ondulado.png';
import homem_tigelinha from '../../assets/usuarios_chat/homem_tigelinha.png';
import mulher_cabelo_curto from '../../assets/usuarios_chat/mulher_cabelo_curto.png';
import tipografia from '../../assets/tipografia_bate-papo.png';


function Bate_papo() {
    return (
        <div className='flex flex-col mt-4 mr-6 w-[20vw] displayCounteiner p-[1%] bg-[#121D13]'>
            <div className='flex justify-center'>
                <img className='w-[90%]' src={tipografia} alt="Tipografia Bate-papo" />
            </div>
            <div className='flex flex-col items-center'>
                <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] items-center'>
                    <img className='flex w-[20%] h-[20%]' src={mulher_cabelo_curto} alt="Foto de perfil do Usuario" />
                    <p className='text-white ml-[5%] fonteSize'>Usuário</p>
                </div>
                <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%]'>
                    <img className='flex w-[20%] h-[20%]' src={homem_tigelinha} alt={`Foto de perfil do Usuario`} />
                    <p className='text-white ml-[5%] fonteSize'>Usuário</p>
                </div>
                <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%]'>
                    <img className='flex w-[20%] h-[20%]' src={homem_padrao_ondulado} alt={`Foto de perfil do Usuario`} />
                    <p className='text-white ml-[5%] fonteSize'>Usuário</p>
                </div>
                <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%]'>
                    <img className='flex w-[20%] h-[20%]' src={homem_padrao} alt={`Foto de perfil do Usuario`} />
                    <p className='text-white ml-[5%] fonteSize'>Usuário</p>
                </div>
                <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%]'>
                    <img className='flex w-[20%] h-[20%]' src={homem_baguncado} alt={`Foto de perfil do Usuario`} />
                    <p className='text-white ml-[5%] fonteSize'>Usuário</p>
                </div>
                <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%]'>
                    <img className='flex w-[20%] h-[20%]' src={careca_tv} alt={`Foto de perfil do Usuario`} />
                    <p className='text-white ml-[5%] fonteSize'>Usuário</p>
                </div>
                <div className='rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] items-center'>
                    <img className='flex w-[20%] h-[20%]' src={mulher_cabelo_curto} alt="Foto de perfil do Usuario" />
                    <p className='text-white ml-[5%] fonteSize'>Usuário</p>
                </div>
                
            </div>
        </div>
    );
}
export default Bate_papo; 