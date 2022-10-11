/* eslint-disable @typescript-eslint/no-explicit-any */

const debounce = (cb: (...parameters: any[]) => void, interval: number) => {
  let lastTimeout: number | null = null;

  return function (...arg: any[]) {
    const parameters = arg;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb(...parameters);
    }, interval);
  };
};

export default debounce;
