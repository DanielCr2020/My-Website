import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
      <header>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link><br/>
        <Link href="/skills">Skills</Link>
        <Link href="/about">About me</Link>
        <Link href="https://github.com/DanielCr2020" target="_blank">GitHub</Link><br/>
        <Link href="https://www.linkedin.com/in/daniel-craig-395085210/" target="_blank">LinkedIn</Link><br/>
      </header>
  )
}
