import { fib } from './fib'

test('base cases', () => {
  expect(fib(0)).toBe(0)
  expect(fib(1)).toBe(1)
})

test('simple non-bases cases', () => {
  expect(fib(2)).toBe(1)
  expect(fib(5)).toBe(5)
})

test('negative cases', () => {
  expect(() => fib(-1)).toThrow()
  expect(() => fib(-100)).toThrow()
})

test('more complex case', () => {
  expect(fib(10)).toBe(55)
})
