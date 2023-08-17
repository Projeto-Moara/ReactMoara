import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';
import moaraLogin from '../../assets/MoaraLogin.png';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="grid place-items-center fundoLoginVerde fonte">
        <form className="w-[27%] mx-auto flex-col gap-4 form-container displayCounteiner bg-[#121D13]" onSubmit={login}>
          <img src={moaraLogin} alt="Logo Moara" />
          <div className="flex flex-col w-full bg-[#121D13]">
            <label htmlFor="usuario" className="ml-[20px] text-white">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="w-full p-[8px] rounded-[40px] bg-[#121D13] border focus:border-white focus:bg-[#121D13]focus:outline-none text-white pl-[20px]"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-white ml-[20px]">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="w-full p-[8px] rounded-[40px] bg-[#121D13] border focus:border-white focus:bg-[#121D13]focus:outline-none text-white pl-[20px]"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button type="submit" className="rounded-[50px] fonteSize px-[30px] bg-[#213423] text-white p-[10px] flex justify-center displayCounteiner">
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>
          <Link to="/cadastro" className="text-[#72A9E3] fonteSize hover:underline">
              Cadastre-se
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;