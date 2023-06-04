// worker.js
const onmessage = function (event) {
  setTimeout(() => {
    self.postMessage('¡Mensaje desde el Web Worker02');
  }, 5000);
  //self.postMessage('¡Mensaje desde el Web Worker02');
};

addEventListener('message', onmessage);
