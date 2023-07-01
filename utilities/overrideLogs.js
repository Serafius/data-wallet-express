import { getTime } from "./getTime.js";

export const overrideLogs = () => {
  const originalLog = console.log;

  console.log = function (...args) {
    args.unshift(getTime() + " | ");
    originalLog.apply(this, args);
  };
};
