import React, { useRef } from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '@/themes/loading-screens/styles/LoadingScreens.module.css';

export default function LoadingScreen() {
  const ref = useRef();

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        ref.current.classList.add(styles.close);
      }, 1500);
    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [ref]);
  return (
    <>
      <div id={styles.loadingScreen} className="" ref={ref}>
        <div className={styles.imgCnt}>
          <Image
            src="/assets/images/logo.png"
            alt="LOGO"
            width={184}
            height={198}
            className={styles.logo}
          />
        </div>
        <div className={styles.animatedBgCnt}>
          <div className={styles.animatedBg}></div>
        </div>
      </div>
    </>
  );
}
