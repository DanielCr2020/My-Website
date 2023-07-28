import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Hello there! My name is Daniel Craig!</p>
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

      <div className={styles.grid}>

      </div>
    </main>
  )
}
