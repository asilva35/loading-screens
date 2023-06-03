// worker.js
const onmessage = function (event) {
  setTimeout(() => {
    self.postMessage('¡Mensaje desde el Web Worker02');
  }, 5000);
};

addEventListener('message', onmessage);
