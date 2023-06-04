import React, { useRef } from 'react';
import { useEffect } from 'react';
import styles from '@/components/LoadingScreens/gradient-waves/styles/LSGradientWaves.module.css';

export default function LSGradientScreen({ image }) {
  const ref = useRef();

  useEffect(() => {
    const onPageLoad = () => {
      const worker = new Worker(new URL('@/workers/wait.js', import.meta.url));
      worker.onmessage = function (event) {
        console.log('Wait Worker:', event.data);
        ref.current.classList.add(styles.close);
      };
      worker.postMessage('Begin');
    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => {
        window.removeEventListener('load', onPageLoad);
        worker.terminate();
      };
    }
  }, [ref]);

  return (
    <>
      <div id={styles.loadingScreen} className="" ref={ref}>
        <div className={styles.imgCnt}>{image}</div>
        <div className={styles.animatedBgCnt}>
          <div className={styles.animatedBg}></div>
        </div>
      </div>
    </>
  );
}
