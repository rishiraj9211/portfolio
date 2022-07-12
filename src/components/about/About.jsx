import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {FaAward} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillFolderAdd} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      <div className="contanier about_contanier">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='about image'/>
        </div>
        </div>
        <div className="about__content">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>So Many Years</small>
          </article>

          <article className="about_card">
            <AiFillFolderAdd className='about_icon'/>
            <h5>Experience</h5>
            <small>So Many Years</small>
          </article>

          <article className="about_card">
            <BsFillPersonFill className='about_icon'/>
            <h5>Clients</h5>
            <small>10</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptas quaerat. Et ex impedit porro totam aliquam, velit voluptatem eligendi soluta rem perspiciatis facilis culpa dolorem, animi iusto excepturi ipsum.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About