let sum = (...args) => {
  switch (args.length) {
    case 0:
    case 1:
    case 2:
      return sum.bind(null, ...args);
    default:
      return args.reduce((r, e) => r + e);
  }
};

// sum(1,2,3) == sum(1,2)(3) == sum(1)(2,3) == sum(1)(2)(3)
