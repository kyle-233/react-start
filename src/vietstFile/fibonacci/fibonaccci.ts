export const fibonacci = (num: number): number => {
  if (num <= 1) {
    return num
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}
