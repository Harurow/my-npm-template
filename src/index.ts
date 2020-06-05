export function swap<T>(x: T, y: T): { x: T; y: T } {
  return { x: y, y: x }
}
