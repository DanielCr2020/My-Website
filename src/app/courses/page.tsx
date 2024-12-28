import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      <h2>Courses I have taken:</h2>
      <h2>Stevens:</h2>
      <p className='left-p'>
          CS 115: Introduction to Computer Science
      </p>
      <p className='left-p'>
          CS 135: Discrete Structures
      </p>
      <p className='left-p'>
          CS 392: Systems Programming
      </p>
      <p className='left-p'>
          CS 492: Operating Systems
      </p>
      <p className='left-p'>
          CS 516: Compiler Design and Implementation
      </p>

    </main>
  )
}
