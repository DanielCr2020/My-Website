'use client'

import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'
import Button from './Button'
import { useState } from 'react'

export default function Header() {
  const [page, setPage] = useState("Home");
  return (
    <header>
      <Link href="/" onClick={()=>setPage("Home")}>
        <Button className={page}>Home</Button>
      </Link>
      {/* <Link href="/about" onClick={()=>setPage("About me")}>
        <Button className={page}>About me</Button>
      </Link> */}
      <Link href="/projects" onClick={()=>setPage("Projects")}>
        <Button className={page}>Projects</Button>
      </Link>
      <Link href="/skills" onClick={()=>setPage("Skills")}>
        <Button className={page}>Skills</Button>
      </Link>
      <Link href="/courses" onClick={()=>setPage("Courses")}>
        <Button className={page}>Courses</Button>
      </Link>
      <Link href="https://github.com/DanielCr2020" target="_blank">
        <Button className={page}>Github</Button>
      </Link>
      <Link href="https://www.linkedin.com/in/daniel-r-craig/" target="_blank">
        <Button className={page}>LinkedIn</Button>
      </Link>
    <br/>
    <h2>Website under construction</h2>
    </header>
  )
}
