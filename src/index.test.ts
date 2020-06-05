import { swap } from './index'

test('swap', () => {
  expect(swap(1, 2)).toEqual({ x: 2, y: 1 })
})
