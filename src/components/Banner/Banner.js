import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const Banner = () => {
    return (
      <div className={styles.Picture}>
        <div className={styles.bannerBox}>
          <h1 className={styles.h1Title}>Winter's Notebook
          </h1>
          <h2 className={styles.h2Title}>Do your best! Fighting!
          </h2>
          <Link to="/docs/intro">
          <button className={styles.Button_notebook}>Notebook</button>
        </Link>
        </div>
      </div>
    );
  };

export default Banner;