import Image from "next/image";
import { m, LazyMotion, domMax } from "framer-motion";
import Layout from "../components/layout";
import styles from "../styles/current-sale.module.css";

export default function Sale() {
  return (
    <Layout>
      <section className={styles.currentSale__root}>
        <div style={{ gridArea: "header" }} className="relative grid">
          <LazyMotion features={domMax}>
            <m.div
              layout
              layoutId="current-title"
              style={{ gridArea: "1/1" }}
              className="relative z-10"
            >
              <h2 className="z-10 mb-4 text-3xl">Current Sale</h2>
            </m.div>
            <m.div
              layoutId="current-hero"
              layout
              style={{ gridArea: "1/1" }}
              className="relative"
            >
              <Image
                src="/assets/img2.jpeg"
                loading="eager"
                layout="fill"
                objectFit="cover"
              />
            </m.div>
          </LazyMotion>
        </div>

        <div style={{ gridArea: "main", height: "50vh" }} className="flex">
          <div className="w-3/12">side bar</div>
          <div className="flex-1 w-9/12 bg-blue-100">product list</div>
        </div>
      </section>
    </Layout>
  );
}
