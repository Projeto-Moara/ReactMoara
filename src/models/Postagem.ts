import Tema from './Tema';
import Usuario from './Usuario';

export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  curtir: number;
  tema: Tema | null;
  usuario: Usuario | null;
}