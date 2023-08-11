import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const { usuario } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if (usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-gradient-to-r from-[#02123E] via-[#06315E] to-[#02123E]">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl-1 font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#ffc41f]'>Moara | Copyright: {data}</p>
            <p className='text-lg-1 text-white'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={38} weight='bold' color='white' />
              <InstagramLogo size={38} weight='bold' color='white' />
              <FacebookLogo size={38} weight='bold' color='white' />
              <GithubLogo size={38} weight='bold' color='white' />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer
