import { fibonacci } from './fibonaccci'

describe('fibonacci', () => {
  test('should return 0 when num is 0', () => {
    expect(fibonacci(0)).toEqual(0)
  })
  test('should return 1 when num is 1', () => {
    expect(fibonacci(1)).toEqual(1)
  })
  test('should return 1 when num is 2', () => {
    expect(fibonacci(2)).toEqual(1)
  })
  test('should return 1 when num is 2', () => {
    expect(fibonacci(3)).toEqual(2)
  })
  test('should return 1 when num is 2', () => {
    expect(fibonacci(4)).toEqual(3)
  })
})
