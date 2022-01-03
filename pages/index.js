import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Innocent's Portfolio</title>
        <meta name="portfolio" content="Information about Innocent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello! I'm Innocent.
        </h1>
        <h3>
          Welcome to my portfolio, built with Nextjs.
        </h3>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
