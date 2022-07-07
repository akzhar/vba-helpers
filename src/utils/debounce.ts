/* eslint-disable @typescript-eslint/no-explicit-any */
const DEBOUNCE_INTERVAL = 300; // ms

const debounce = (cb: (...parameters: any[]) => void) => {
  let lastTimeout: number | null = null;

  return function (...arg: any[]) {
    const parameters = arg;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb(...parameters);
    }, DEBOUNCE_INTERVAL);
  };
};

export default debounce;
