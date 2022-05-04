const {
    i,
    shared
} = workerData;
const sharedInts = new Int32Array(shared);
const mutex = new Mutex(sharedInts, 4);
mutex.exec(() => {
    const a = sharedInts[i];
    for (let j = 0; j < 1_000_000; j++) {}
    const b = sharedInts[3];
    sharedInts[3] = a * b;
    assert.strictEqual(sharedInts[3], a * b);
});