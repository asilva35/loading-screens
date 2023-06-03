import React, { useRef } from 'react';
import { useEffect } from 'react';
import styles from '@/components/LoadingScreens/gradient-waves/styles/LSGradientWaves.module.css';

export default function LSGradientScreen({ image }) {
  const ref = useRef();

  //   useEffect(() => {
  //     const onPageLoad = () => {
  //       const worker = new Worker(
  //         //new URL('../wait5s.worker.js', import.meta.url)
  //         new URL('@/workers/wait5s.js', import.meta.url)
  //       );

  //       // Escucha el mensaje enviado por el Web Worker
  //       worker.onmessage = function (event) {
  //         console.log('Mensaje recibido:', event.data);
  //       };
  //       worker.postMessage('¡Hola Web Worker!');
  //     };
  //     if (document.readyState === 'complete') {
  //       onPageLoad();
  //     } else {
  //       window.addEventListener('load', onPageLoad);
  //       return () => {
  //         window.removeEventListener('load', onPageLoad);
  //         worker.terminate();
  //       };
  //     }
  //   }, []);

  useEffect(() => {
    const onPageLoad = () => {
      const worker = new Worker(
        new URL('@/workers/wait5s.js', import.meta.url)
      );
      worker.onmessage = function (event) {
        console.log('Mensaje recibido:', event.data);
        ref.current.classList.add(styles.close);
      };
      worker.postMessage('¡Hola Web Worker!');
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

  //   useEffect(() => {
  //     const onPageLoad = () => {
  //       setTimeout(() => {
  //         ref.current.classList.add(styles.close);
  //       }, 5000);
  //       //ref.current.classList.add(styles.close);

  //       //const worker = new Worker('/worker.js');
  //       //   const worker = new Worker(
  //       //     new URL('@/workers/wait5s.js', import.meta.url).href
  //       //   );

  //       //   // Escucha el mensaje enviado por el Web Worker
  //       //   worker.onmessage = function (event) {
  //       //     console.log('Mensaje recibido:', event.data);
  //       //   };
  //     };
  //     if (document.readyState === 'complete') {
  //       onPageLoad();
  //     } else {
  //       window.addEventListener('load', onPageLoad);
  //       return () => {
  //         window.removeEventListener('load', onPageLoad);
  //         worker.terminate();
  //       };
  //     }
  //   }, [ref]);
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
