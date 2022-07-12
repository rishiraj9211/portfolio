import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/rishiraj-yadav-605a201a2/' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/rishiraj9211' target='blank'><FaGithubSquare/></a>

    </div>
  )
}

export default HeaderSocials