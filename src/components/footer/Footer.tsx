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
        <div className="h-[200px]">
          <div className="w-[93vw] flex-col form-container displayCounteiner-3 bg-[#121D13]">
            <div className="container flex flex-col items-center">
              <p className='text-xl-1 font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#ffc41f]'>Moara | Copyright: {data}</p>
              <p className='text-lg-1 text-white'>Acesse nossas redes sociais</p>
              <div className='flex gap-2'>
                <a href="https://linktr.ee/Moara.app">
                  <LinkedinLogo size={38} weight='bold' color='white' />
                </a>
                <a href="https://www.instagram.com/moara.app/">
                  <InstagramLogo size={38} weight='bold' color='white' />
                </a>
                <a href="https://linktr.ee/Moara.app">
                  <FacebookLogo size={38} weight='bold' color='white' />
                </a>
                <a href="https://github.com/Projeto-Moara">
                  <GithubLogo size={38} weight='bold' color='white' />
                </a>
              </div>
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
