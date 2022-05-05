console.log('hello from main.js');
  
const worker = new Worker('worker.js');
worker.onmessage = (msg) => {
  console.log('Ser recibio un mensaje en main', msg.data);
};
worker.postMessage('se envio un mensaje al worker');
console.log('hello from end of main.js');

// main JavaScript file
window.addEventListener('beforeunload', () => {
  worker.port.postMessage('close');
});
// shared worker
port.onmessage = (event) => {
  if (event.data === 'close') {
    ports.delete(port);
    return;
  }
};