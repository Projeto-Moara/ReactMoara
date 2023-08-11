interface ComentariosProps {
  conteudo: string
}

function Comentarios({ conteudo }: ComentariosProps) {
  return (
    <p>{conteudo}</p>
  )
}

export default Comentarios