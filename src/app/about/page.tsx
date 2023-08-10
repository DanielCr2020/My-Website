import Image from 'next/image'
import '@/globals.css'
import styles from '@/styles.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>About page. Hello! My name is Daniel Craig!</p>
      </div>

      <div className={styles.center}>
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

      <div className={styles.grid}>

      </div>
    </main>
  )
}
