export const timer = (time: number, callback: (params?: any) => any) => {
  return setTimeout(callback, time);
};
