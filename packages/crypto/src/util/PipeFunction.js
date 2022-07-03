export default class PipeFunction {
  constructor (...fns) {
    return async input => {
      let accumulator = input
      for (const fn of fns) {
        accumulator = await fn(accumulator)
      }
      return accumulator
    }
  }
}
