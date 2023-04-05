import styles from "@/styles/Home.module.css";
import { useState } from 'react';

const Nav = () => {
  const [burgerState, setburgerState] = useState(true);
  const changeState = () => {
    setburgerState(!burgerState);
  };
    return (
      <section className={styles.Nav }>
        <img src="/logo.svg" alt="logo" className={styles.logo}></img>
        <button onClick={changeState}>
          {!burgerState && <img src="/icon-menu-close.svg" className={styles.close_icon}></img> }
          {burgerState && <img src="/icon-menu.svg" className={styles.burger_icon}></img>}
            
        </button>
        <div className={styles.desktop_links}>
          <a href="/">Home</a>
          <a href="/">New</a>
          <a href="/">Popular</a>
          <a href="/">Trending</a>
          <a href="/">Categories</a>
        </div>

        <div className={ !burgerState ? styles.blur : styles.normal }>

        </div>
        <aside className={ !burgerState ? styles.active : styles.not }>
          
          <a href="#home"onClick={changeState}>Home</a>
          <a href="#news" onClick={changeState}>New</a>
          <a href="#" onClick={changeState}>Popular</a>
          <a href="#trending" onClick={changeState}>Trending</a>
          <a href="#" onClick={changeState}>Categories</a>
        </aside>
      </section>
    )
}

export default Nav