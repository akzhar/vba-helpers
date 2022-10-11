/* eslint-disable @typescript-eslint/no-explicit-any */

const throttle = (cb: (...parameters: any[]) => void, interval: number) => {
  let isThrottled = false;
  let savedArgs: any|any[];
  let savedThis: any;

  function wrapper(...arg: any|any[]) {
    if (isThrottled) {
      savedArgs = arg;
      savedThis = this;
      return;
    }

    cb.apply(this, arg);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, interval);
  }

  return wrapper;
}

export default throttle;
