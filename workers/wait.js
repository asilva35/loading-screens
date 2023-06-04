// worker.js
const onmessage = function (event) {
  setTimeout(() => {
    self.postMessage('Ready');
  }, 1500);
};

addEventListener('message', onmessage);
