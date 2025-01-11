import Image from 'next/image'
import '@/styles.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main">
      <h2>Listed here are various projects I have worked on</h2>

      <details className='large-text'>
        <summary className="bold-large-text">LS</summary>
        <p className='project-p-width'>
          An implementation of the GNU LS coreutil in C with some of the flags. 
          Uses linux system calls and has proper width printing for long list format.
          The goal is to have this reimplementation function similarly to the coreutil implementation.
        </p>
        <p className="project-header">Started:</p>
        03/2024
        <Link href="https://github.com/DanielCr2020/LS" target="_blank">
          GitHub
        </Link>
      </details>
      <br/>
      <details className="large-text">
        <summary className="bold-large-text">Anti-Copy-Paster-Python</summary>
        <p className='project-p-width'>
          A plugin for PyCharm that suggests refactors for duplicated code with customizable triggers.
        </p>
        <Link href="https://github.com/SE4AIResearch/AntiCopyPaster_Python_Fall2023" target="_blank">
          GitHub
        </Link>
      </details>

    </main>
  )
}
