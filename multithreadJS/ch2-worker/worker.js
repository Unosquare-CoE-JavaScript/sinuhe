console.log('hello from worker.js');
self.onmessage = (msg) => {
  console.log('se recibio un mensaje en worker', msg.data);
  postMessage('se envio un mensaje a main');
};