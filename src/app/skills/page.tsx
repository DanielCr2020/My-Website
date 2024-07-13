import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      <div className="description">
        <p>This website is a work in progess</p>
        <p>C, Java, Javascript</p>
      </div>


      <Link href="/">Home</Link>

    </main>
  )
}
