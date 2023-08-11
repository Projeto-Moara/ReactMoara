import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

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
      <div className="grid h-screen place-items-center fundoLogin">
        <form className="max-w-[400px] mx-auto flex-col gap-4 form-container h-1/2 bg-gradient-to-r from-[#02123E] via-[#06315E] to-[#02123E] rounded-lg drop-shadow-xl" onSubmit={login}>
          <h2 className="text-[#FF7A00] text-5xl">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-white">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-800 rounded p-2"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-white">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button type="submit" className="rounded bg-gradient-to-r from-green-500 to-blue-600 hover:from-[#FF7A00] hover:to-[#ffc41f]  text-white w-1/2 py-2 flex justify-center">
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

          <hr className="border-slate-800 w-full" />

          <p className="text-white font-bold">
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-[#FF7A00]	 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;