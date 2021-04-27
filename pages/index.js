import Head from "next/head";
import { m, LazyMotion, domMax } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <section className={styles.home__root}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LazyMotion features={domMax}>
          <m.div
            className={`${styles.hero} hover:shadow-2xl transition-all mt-7 relative grid`}
            layoutId="current-hero"
            layout
            style={{ display: "grid" }}
          >
            <div
              style={{ gridArea: "1/1" }}
              className="relative z-10 flex flex-col justify-center max-w-2xl p-5 text-2xl text-gray-50 place-items-start xl:p-20 "
            >
              <div className="p-6 bg-gray-500 rounded bg-opacity-60">
                <m.div layout layoutId="current-title">
                  <h2 className="mb-4 text-3xl">Current Sale</h2>
                </m.div>
                <p className="mb-4 text-xl">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                {/* <Link href="/current-sale">
                  <div className="p-4 text-xl uppercase bg-blue-300 rounded-md shadow-md">
                    Shop Current Sale
                  </div>
                </Link> */}
              </div>
            </div>
            <Link href="/current-sale">
              <Image
                src="/assets/img2.jpeg"
                loading="eager"
                layout="fill"
                objectFit="cover"
              />
            </Link>
          </m.div>
        </LazyMotion>
        <div className={styles.img1}>
          <Image
            src="/assets/img1.jpeg"
            loading="eager"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.img2}>
          <Image
            src="/assets/img3.jpeg"
            loading="eager"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.img3}>
          <Image
            src="/assets/img4.jpeg"
            loading="eager"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </Layout>
  );
}
