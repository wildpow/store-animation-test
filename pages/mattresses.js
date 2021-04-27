import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <div>
      <h3>features</h3>
      <motion.div className="image" layoutId="image">
        <Image
          src="/assets/task.png"
          layout="responsive"
          width={780}
          height={501}
        />
      </motion.div>
      <Link href="/" passHref>
        back
      </Link>
    </div>
  );
}
