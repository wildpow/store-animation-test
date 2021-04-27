import Navigation from './navigation'
import Footer from './footer'
import styles from '../styles/layout.module.css'
export default function Layout({children}) {
  return (
    <main className={styles.layout__root}>
    <Navigation/>
    {children}
    <Footer/>
    </main>
  )
}