import Link from "next/link";

import styles from "../styles/navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.nav__root}>
      <nav className="flex justify-between p-5 mx-auto mt-5 shadow-md max-w-screen-2xl bg-gray-50 lg:text-lg">
        <h1>The Mattress Store</h1>
        <div>
          <ul>
            <li>
              <Link href="/mattresses">Mattresses</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
