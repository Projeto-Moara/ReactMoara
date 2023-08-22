import './Sobre.css';
import Carrossel from '../../components/carrossel/Carrossel';

import '../../global/global.css';

const Sobre = () => {

  return (


    <div className="fonte w-[90%] h-[40%] flex-col gap-4 ">

      <div className=" container flex flex-box m-auto texto">
        <div className="justify-center flex w-[80%] h-[75%] mx-auto my-1"><Carrossel /></div>
      </div>

      <div className="w-[100%] h-[85%] p-[4%] md-3 flex-col m-4 displayCounteiner-2 bg-[#121D13] text-white text-justify">
        <p>
          Bem-vindo(a) à Moara! Somos uma rede social dedicada a empresas, ONGs e voluntários que compartilham ações sociais centradas na ODS 13 - Ação Contra a Mudança Global do Clima. Nosso objetivo é melhorar a educação, aumentar a conscientização e fortalecer a capacidade humana e institucional para adotar medidas urgentes no combate às alterações climáticas e seus impactos.
        </p>
        <br />  
        <p>Aqui, você encontrará um espaço colaborativo para conectar-se com outros agentes de mudança e compartilhar suas iniciativas e projetos relacionados à Ação Contra a Mudança Global do Clima. Nossa plataforma oferece recursos e ferramentas para promover a troca de conhecimentos, inspirar novas ideias e impulsionar ações concretas em prol de um futuro sustentável.
        </p>
        <br />
        <p>Nossa equipe de desenvolvimento está comprometida em aprimorar constantemente a experiência na Moara para atender às suas necessidades. Valorizamos o poder da comunidade e acreditamos que, juntos, podemos fazer a diferença.
        </p>
        <br />
        <p>Junte-se a nós e seja parte dessa jornada rumo a um mundo mais resiliente e ambientalmente consciente. Vamos construir um futuro melhor, unindo nossos esforços em prol da Ação Contra Mudança Global Clima. Vamos fazer acontecer!
        </p>
      </div>
    </div>

  )
}

export default Sobre;