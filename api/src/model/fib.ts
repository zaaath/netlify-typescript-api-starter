export function fib(n: number): number {
  if (n < 0) { throw new Error('Input must be a positive number') }
  else if (n < 2) return n
  else return fib(n - 1) + fib(n - 2)
}
