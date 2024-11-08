import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    // <div className='center-div'>
      <header>
        <a href="/">
          <button className="link-button"> 
            Home
          </button>
        </a>
        <a href="/about">
          <button className="link-button"> 
            About&nbsp;me
          </button>
        </a>
        <a href="/courses">
          <button className="link-button"> 
            Courses
          </button>
        </a>
        <a href="/projects">
          <button className="link-button"> 
            Projects
          </button>
        </a>
        <a href="/skills">
          <button className="link-button"> 
            Skills
          </button>
        </a>
        <a href="https://github.com/DanielCr2020" target="_blank">
          <button className="link-button"> 
            Github
          </button>
        </a>
        <a href="https://www.linkedin.com/in/daniel-r-craig/" target="_blank">
          <button className="link-button">
            LinkedIn
          </button>
        </a>
      <br/>
      <h2>Website under construction</h2>
      </header>
    // </div>
  )
}
