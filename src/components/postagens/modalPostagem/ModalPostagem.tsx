import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={<button className='rounded bg-gradient-to-r from-green-500 to-blue-600 hover:from-[#FF7A00] hover:to-[#ffc41f] Hover me py-2 px-4'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;