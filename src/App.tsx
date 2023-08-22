import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import Manager from './components/Manager/Manager';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Manager />

          {/* <div className="grid gap-12 grid-cols-12">
            <div className='col-span-1'></div>
            <div className='col-span-3'><Navbar /></div>
            <div className='col-span-8'>
              <div className='min-h-[80vh]'>
                <Routes>

                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/sobre" element={<Sobre />} />

                  
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/temas" element={<ListaTemas />} />
                    <Route path="/cadastroTema" element={<FormularioTema />} />
                    <Route path="/editarTema/:id" element={<FormularioTema />} />
                    <Route path="/deletarTema/:id" element={<DeletarTema />} />
                    <Route path="/postagens" element={<ListaPostagens />} />
                    <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
                    <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
                    <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
                    <Route path="/perfil" element={<Perfil />} />
                   

                </Routes>
              </div>
            </div>

          </div> */}
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;