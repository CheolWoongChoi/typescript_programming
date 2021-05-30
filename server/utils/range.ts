export function* range(max: number, min = 0) {
  while (min < max) {
    yield min++;
  }
}
