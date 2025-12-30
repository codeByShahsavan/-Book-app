import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
         <h1>Book App</h1>
         <p>the library book app with react</p>
    </header>
    {children}
    <footer className={styles.footer}>
       <p>Developed by shahsavan with 💖</p>
    </footer>
    </>
  )
}

export default Layout