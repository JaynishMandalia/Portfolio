import React from 'react'

import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const headersocials = () => {
  return (
      <div className='header_socials'>
          
          <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
          <a href="http://github.com/JaynishMandalia" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
    </div>
  )
}

export default headersocials