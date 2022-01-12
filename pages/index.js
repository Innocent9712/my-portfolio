import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import github from "../public/images/github.svg"
import twitter from "../public/images/twitter.svg"
import linkedin from "../public/images/linkedin.svg"
import logo from "../public/images/logo.svg"
import introBg from "../public/images/section1bg.jpg"
import Stack from '../components/stack'
import Projects from '../components/projects'


export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <Head>
          <title>Innocent's Portfolio</title>
          <meta name="portfolio" content="Information about Innocent" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.header_wrapper}>
          <header className={styles.header}>
            <div className={styles.header_top}>
              <div>
                <h1>
                  Innocent 
                  <span>
                    Chukwuemeka
                  </span>
                </h1>
                <h3>
                  Frontend Engineer
                </h3>
              </div>
              <button>              
                <a 
                href="https://drive.google.com/file/d/1xzdSDVSMcz87fx6w9PefHIaae9FU8ewh/view?usp=sharing" 
                download="Innocent's Resume"
                target="_blank"
                rel="noopener"
                referrerPolicy="no-referrer"
                >resume</a>
              </button>
            </div>
            <div className={styles.header_bottom}>
              <ul>
              <li className={styles.socials}>
                  <a
                  href="https://github.com/innocent9712"
                  target="_blank"
                  rel="noopener"
                  referrerPolicy="no-referrer"
                  >
                    <Image 
                    className={styles.socials} 
                    src={twitter}
                    alt="github"
                    />
                  </a>
                </li>
                <li className={styles.socials}>
                  <a
                  href="https://linkedin/in/iaminnocent99"
                  target="_blank"
                  rel="noopener"
                  referrerPolicy="no-referrer"
                  >
                    <Image 
                    className={styles.socials} 
                    src={linkedin}
                    alt="github"
                    />
                  </a>
                </li>
                <li className={styles.socials}>
                  <a
                  href="https://github.com/innocent9712"
                  target="_blank"
                  rel="noopener"
                  referrerPolicy="no-referrer"
                  >
                    <Image 
                    className={styles.socials} 
                    src={github}
                    alt="github"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </header>
       </div>
        <main className={styles.main}>
          <section className={styles.intro}>
            <h1>
              Portfolio
            </h1>
            <figure>
              <Image 
              src={introBg}
              alt="laptop on a desk"
              />
            <figcaption>
              <h2>Hey there!</h2><br/>
              <p>My name is <span>Innocent</span> <br/><span>and I provide solutions through code.</span></p>
            </figcaption>
            </figure>
          </section>
          <article className={styles.more_info}>
            <p>I'm a Frontend Engineer proficient in building out outstanding user interfaces that are fully responsive and interactive. I am keen on learning about problems in providing optimal experience for users and exploring potential technologies and practices capable of solving these problems.</p>
            <p>Connecting and networking with other people in the tech space and learning about how they are helping shape the world with technology is something I am actively engaged in. </p>
            <p>I'm also planning on exploring cloud technologies and how they can enable me provide solutions for software users.</p>
          </article>
          <section className={styles.stack}>
            <h1>
              Tech Stack
            </h1>
            <Stack />
          </section>
          <section className={styles.projects}>
            <h1>
              Projects
            </h1>
              <Projects />
          </section>
        </main>

        <footer className={styles.footer}>
        <Image 
              src={logo}
              alt="logo"
              />
        </footer>
      </div>
    </Layout>
  )
}
