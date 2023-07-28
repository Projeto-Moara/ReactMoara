import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  
  return (
    <>
        <div className="flex justify-center bg-[#80C0DA] text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold text-[#024D78]'> Moara | Copyright: </p>
            <p className='text-lg text-[#024D78]'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' color='#024D78'/>
              <InstagramLogo size={48} weight='bold' color='#024D78'/>
              <FacebookLogo size={48} weight='bold' color='#024D78'/>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer