import Image from 'next/image'
import './styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      <h1>Hello! My name is Daniel Craig!</h1>
      <div className="image-container">
        <div className="description-text">
          I am a senior Computer Science major at Stevens Institute of Technology
        </div>
        <Image
          src="/Daniel.jpg"
          alt="Daniel Craig"
          width={300}
          height={300}
          priority
        />
      </div>
      <Link href="/about">About me (wip)</Link>
    </main>
  )
}
