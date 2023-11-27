import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      <div className="description">
        <p>You have reached the about page! My name is still Daniel Craig!</p>
        <p>My website is under construction</p>
      </div>

      <div className="center">
        <Image
          // className={styles.logo}
          src="/Daniel.jpg"
          alt="Daniel Craig Logo"
          width={300}
          height={300}
          priority
        />
      </div>

      <Link href="/">Home</Link>

    </main>
  )
}
