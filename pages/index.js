import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { m,LazyMotion, domMax } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Layout from '../components/layout'
export default function Home() {
  return (
    <Layout>
    <section className={styles.home__root}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LazyMotion features={domMax}>

      <m.div className={styles.hero} layoutId="image" layout>
      <Link href="/current-sale">
      <Image 
                src="/assets/img2.jpeg"
                loading='eager'
                layout="fill"
        objectFit="cover"
              />
      </Link>
      </m.div>
      </LazyMotion>
    <div className={styles.img1}>
    <Image
                src="/assets/img1.jpeg"
                loading='eager'
                layout="fill"
        objectFit="cover"
              />
    </div>
    <div className={styles.img2}>
    <Image
                src="/assets/img3.jpeg"
                loading='eager'
                layout="fill"
        objectFit="cover"
              />
    </div>
    <div className={styles.img3}>
    <Image
                src="/assets/img4.jpeg"
                loading='eager'
                layout="fill"
        objectFit="cover"
              />
    </div>
  


    
    </section>
    </Layout>
  )
}
