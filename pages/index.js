import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
      <Link href="/features" passHref>go</Link>
        nav
      </nav>
      <main className={styles.main}>
      <div className={styles.hero}>
      <Image 
                src="/assets/img2.jpeg"
                
                layout="fill"
        objectFit="cover"
              />
      </div>
    <div className={styles.img1}>
    <Image
                src="/assets/img1.jpeg"
                      
                layout="fill"
        objectFit="cover"
              />
    </div>
    <div className={styles.img2}>
    <Image
                src="/assets/img3.jpeg"
                       
                layout="fill"
        objectFit="cover"
              />
    </div>
    <div className={styles.img3}>
    <Image
                src="/assets/img4.jpeg"
                        
                layout="fill"
        objectFit="cover"
              />
    </div>
  
      </main>

      <footer className={styles.footer}>
      footer
      </footer>
    </div>
  )
}
