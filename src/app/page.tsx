import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      {/* <h1>Website under construction</h1> */}
      <h2 className="title">Hello! My name is Daniel Craig!</h2>
      <div className='description'>
        <p className="description-text">
          I am a Computer Science major from Stevens Institute of Technology. I graduated with Honors in May of 2024
          with a 3.521 GPA.
          I am interested in pursuing a career in Systems Programming and other lower-level progamming fields.
          This includes but is not limited to Operating System development, driver development, programming for 
          embedded systems, and GPU programming.
        </p>
        <p className='description-text'>
          As of Fall of 2024, I am pursuing my graduate Computer Science education at Rutgers 
          University-New Brunswick.
        </p>
        <p className="description-text">
          I also enjoy programming on a slightly higher level, such as game development, web development, and desktop
          app development.
        </p>
        <p className="description-text">
          I have taken Systems Programming, Systems Administration, Systems Security, Operating Systems, Compiler Design and Implementation, 
          Parallel Programming for Many Core Processors, as well as Web Programming I and II. 
        </p>
      </div>
      <div className="center-div">
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
