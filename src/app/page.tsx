import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      <header>      
        <Link href="https://github.com/DanielCr2020" target="_blank">GitHub</Link><br/>
        <Link href="https://www.linkedin.com/in/daniel-craig-395085210/" target="_blank">LinkedIn</Link><br/>
        <Link href="/about">About me</Link>
      </header>
      <h1>Website under construction</h1>
      <h2 className="title">Hello! My name is Daniel Craig!</h2>
        <p className="description-text">
          I am a senior Computer Science major at Stevens Institute of Technology. I enjoy Systems Programming and other low-level computer science topics.
          I am familiar with C, Python, Javascript, Java, Bash, OCaml, as well as some more languages.
        </p>
        <p className="description-text">
          I have taken Systems Programming, Operating Systems, Compiler Design and Implementation, as well as 
          Web Programming I and II.
        </p>
        <p className="description-text">
          In Spring 2024, I will be taking Parallel Programming for Many Core Processors, Systems Administration,
          and Systems Security
        </p>
      <div className="center">
        <Image
          src="/Daniel.jpg"
          alt="Daniel Craig"
          width={250}
          height={250}
          priority
        />
      </div>
    </main>
  )
}
