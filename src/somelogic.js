
export function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}


export function mul(...args) {
  return args.reduce((p, c) => p * c, 1);
}
