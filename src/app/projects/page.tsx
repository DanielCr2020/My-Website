import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      <div className="description">
        <p className='description-text'>
          I have started many projects. Many of these are visible on my GitHub (linked in the header).
        </p>
        <p className='description-text'>
          One of my more recent projects is reimplementing LS in C with many of the flags
        </p>
      </div>

    </main>
  )
}
