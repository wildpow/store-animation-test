import Navigation from "./navigation";
import Footer from "./footer";
import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout__root}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
