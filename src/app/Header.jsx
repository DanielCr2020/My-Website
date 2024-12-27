'use client'

import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'
import Button from '../components/Button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [page, setPage] = useState("Home");
  return (
    // <div className='center-div'>
      <header>
        <Link href="/" onClick={()=>setPage("Home")}>
          <button>Home</button>
        </Link>
        <Link href="/about" onClick={()=>setPage("About me")}>
          <button>About me</button>
        </Link>
        <Link href="/courses" onClick={()=>setPage("Courses")}>
          <button>Courses</button>
        </Link>
        <Link href="/projects" onClick={()=>setPage("Projects")}>
          <button>Projects</button>
        </Link>
        <Link href="/skills" onClick={()=>setPage("skills")}>
          <button>Skills</button>
        </Link>
        <Link href="https://github.com/DanielCr2020" target="_blank">
          <button>Github</button>
        </Link>
        <Link href="https://www.linkedin.com/in/daniel-r-craig/" target="_blank">
          <button>LinkedIn</button>
        </Link>
      <br/>
      <h2>Website under construction</h2>
      </header>
    // </div>
  )
}
