import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      <p className='description-text'>
        Many of these projects can be found on my GitHub
      </p>

      <div className="side-by-side">
        <h3 className='project-h3-width'>LS</h3>
        <p className='project-p-width'>
          An implementation of LS in C with some of the flags.
        </p>
        <Link href="https://github.com/DanielCr2020/LS" target="_blank">
          GitHub
        </Link>
      </div>

      <div className="side-by-side">
        <h3 className="project-h3-width">Anti-Copy-Paster-Python</h3>
        <p className='project-p-width'>
          A plugin for PyCharm that suggests refactors for duplicated code with customizable triggers.
        </p>
        <Link href="https://github.com/SE4AIResearch/AntiCopyPaster_Python_Fall2023" target="_blank">
          GitHub
        </Link>
      </div>


      <h2>

      </h2>

    </main>
  )
}
