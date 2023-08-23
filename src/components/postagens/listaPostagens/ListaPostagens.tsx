import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { atualizar, buscar } from '../../../services/Service';
import CardPostagem from '../cardPostagem/CardPostagem';
import { toastAlerta } from '../../../util/toastAlerta';
import '../../../global/global.css'

function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar('/postagens', setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  async function curtir(id: number) {
    await atualizar(`/postagens/curtir/${id}`, postagem, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
    await buscarPostagens()
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);

  return (
    <>
      {postagens.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='h-[100vh] overflow-y-scroll scrollbar scrollbar-thumb-[#121D13] scrollbar-thumb-rounded scrollbar-w-[10px] custom-scrollbar ml-[7%]'>
        {postagens.map((postagem) => (
          <CardPostagem key={postagem.id} post={postagem} curtir={curtir} />
        ))}
      </div>
    </>
  );
}

export default ListaPostagens;
