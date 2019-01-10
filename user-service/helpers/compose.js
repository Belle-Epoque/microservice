const compose = (...fns) =>
  fns.reduce(
    (f, g) => (...args) => (g ? f(g(...args)) : f(...args)),
    fn => async (...args) => fn(...args)
  );

export default compose;
