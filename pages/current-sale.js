import Image from "next/image";
import { m, LazyMotion, domMax } from "framer-motion";
import Layout from "../components/layout";

export default function Sale() {
  return (
    <Layout>
      <LazyMotion features={domMax}>
        <m.div style={{ width: "500px" }} layoutId="image" layout>
          <Image
            src="/assets/img2.jpeg"
            loading="eager"
            layout="responsive"
            height={500}
            width={500}
          />
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
