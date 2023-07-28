import React from 'react';
import LogoLogin from '../../assets/login_animation.svg'
import "./Login.css";


function Login() {
    return (
        <>
       <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-[#80C0DA]">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
          <h2 className="text-white text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full text-white">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-blue-900 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full text-white">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-blue-900 rounded p-2"
            />
          </div>

          <button  type='submit' className="border-2 border-blue-900 rounded bg-white hover:bg-blue-100 text-blue-900 w-1/2 py-2 flex justify-center">
            <span>Entrar</span>
          </button>
          </form>
          </div>

        

        </>
    );
}

export default Login


/*import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    let navigate = useNavigate()
    return (
        <div className="bg-[#80C0DA] flex justify-center">
            <h2 className="text-slate-900 text-5xl   m-4">Login</h2>
            <div>
                
                <button type='submit'
                    onClick={() => { navigate('/home') }}
                    className='hover:underline mx-4'>
                    Login useNavigate
                </button>
                <Link to='/home' className='hover:underline  mx-4'>Login por Link</Link>
            </div>

        </div>
    )
}

export default Login*/