import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Login from "../../pages/login/Login";
import Home from "../../pages/home/Home";
import Sobre from "../../pages/sobre/Sobre";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Cadastro from "../../pages/cadastro/Cadastro";
import ListaTemas from "../temas/listaTemas/ListaTemas";
import FormularioTema from "../temas/formularioTema/Formulariotema";
import DeletarTema from "../temas/deletarTema/DeletarTema";
import FormularioPostagem from "../postagens/formularioPostagem/FormularioPostagem";
import DeletarPostagem from "../postagens/deletarPostagem/DeletarPostagem";
import Perfil from "../../pages/perfil/Perfil";
import Footer from "../footer/Footer";
import '../../global/global.css'

export default function Manager() {

    const { usuario } = useContext(AuthContext);

    const token = usuario.token;
    let component


    if (token === '') {
        component = (
            <>
                <div>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                    </Routes>
                </div>
            </>
        )
    } else {
        component = (
            <>
                <div className="fundoVerde-2 ">
                    <div className="mx-10 grid gap-12 grid-cols-12 ">
                        <div className='col-span-3'><Navbar /></div>
                        <div className='col-span-9'>
                            <div>
                                <Routes>

                                    <Route path="/home" element={<Home />} />
                                    <Route path="/sobre" element={<Sobre />} />

                                    <Route path="/" element={<Login />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/cadastro" element={<Cadastro />} />
                                    <Route path="/sobre" element={<Sobre />} />
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/temas" element={<ListaTemas />} />
                                    <Route path="/cadastroTema" element={<FormularioTema />} />
                                    <Route path="/editarTema/:id" element={<FormularioTema />} />
                                    <Route path="/deletarTema/:id" element={<DeletarTema />} />
                                    <Route path="/postagens" element={<Home />} />
                                    <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
                                    <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
                                    <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
                                    <Route path="/perfil" element={<Perfil />} />

                                </Routes>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {component}
        </>
    )
}
