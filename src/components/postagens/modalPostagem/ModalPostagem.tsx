import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <div className=' text-white text-base  py-2 grid-rows-1 md:col-span-4 lg:col-span-1'>
        <Popup
          trigger={<button className='rounded bg-gradient-to-r from-green-500 to-blue-600 hover:from-[#FF7A00] hover:to-[#ffc41f] Hover me py-2 px-3'><p className='list-disc text-center'>Nova Postagem</p></button>} modal>
          <div>
            <FormularioPostagem />
          </div>
        </Popup>
      </div>
    </>
  );
}

export default ModalPostagem;