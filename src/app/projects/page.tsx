import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      <div className="description">
        <p>This website is a work in progess</p>
        <p>One of my more recent projects is reimplementing LS in C with many of the flags</p>
      </div>


      <Link href="/">Home</Link>

    </main>
  )
}
