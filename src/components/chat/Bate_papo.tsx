import careca_tv from '../../assets/usuarios_chat/careca_tv.png';
import homem_baguncado from '../../assets/usuarios_chat/homem_baguncado.png';
import homem_padrao from '../../assets/usuarios_chat/homem_padrao.png';
import homem_padrao_ondulado from '../../assets/usuarios_chat/homem_padrao_ondulado.png';
import homem_tigelinha from '../../assets/usuarios_chat/homem_tigelinha.png';
import mulher_cabelo_curto from '../../assets/usuarios_chat/mulher_cabelo_curto.png';
import tipografia from '../../assets/tipografia_bate-papo.png';


function Bate_papo() {
    return (
        <div className='mt-[10%] h-[90vh]  displayCounteiner-2 flex flex-col p-[2%] bg-[#121D13]'>

            <div className='flex justify-center'>
                <img className='w-[90%]' src={tipografia} alt="Tipografia Bate-papo" />
            </div>
            <div className='mt-[6%]'>
                <div className='flex flex-col items-center'>
                    <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
                        <div className='w-[25%]'>
                            <img className='flex w-[40px] h-[40px] rounded-[50px]' src={mulher_cabelo_curto} alt="Foto de perfil do Usuario" />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-white ml-[5%] fonteSize text-center'>Usuário</p>
                        </div>
                    </div>

                    <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
                        <div className='w-[25%]'>
                            <img className='flex w-[40px] h-[40px] rounded-[50px]' src={homem_tigelinha} alt={`Foto de perfil do Usuario`} />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-white ml-[5%] fonteSize text-center'>Usuário</p>
                        </div>
                    </div>

                    <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
                        <div className='w-[25%]'>
                            <img className='flex w-[40px] h-[40px] rounded-[50px]' src={homem_padrao_ondulado} alt={`Foto de perfil do Usuario`} />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-white ml-[5%] fonteSize text-center'>Usuário</p>
                        </div>
                    </div>

                    <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
                        <div className='w-[25%]'>
                            <img className='flex w-[40px] h-[40px] rounded-[50px]' src={homem_padrao} alt={`Foto de perfil do Usuario`} />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-white ml-[5%] fonteSize text-center'>Usuário</p>
                        </div>
                    </div>

                    <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
                        <div className='w-[25%]'>
                            <img className='flex w-[40px] h-[40px] rounded-[50px]' src={homem_baguncado} alt={`Foto de perfil do Usuario`} />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-white ml-[5%] fonteSize text-center'>Usuário</p>
                        </div>
                    </div>

                    <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
                        <div className='w-[25%]'>
                            <img className='flex w-[40px] h-[40px] rounded-[50px]' src={careca_tv} alt={`Foto de perfil do Usuario`} />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-white ml-[5%] fonteSize text-center'>Usuário</p>
                        </div>
                    </div>

                    <div className='w-[85%] h-[50px] rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center cursor-pointer m-[3%] hover:bg-[#314d34] items-center'>
                        <div className='w-[25%]'>
                            <img className='flex w-[40px] h-[40px] rounded-[50px]' src={mulher_cabelo_curto} alt="Foto de perfil do Usuario" />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-white ml-[5%] fonteSize text-center '>Usuário</p>
                        </div>
                    </div>
                    

                </div>
            </div>

        </div>
    );
}
export default Bate_papo; 