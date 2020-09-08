import reactive, { effect } from './reactive';

const obj = reactive({
  nums: {
    a: 1
  },
  b:1
})
let r
effect(() => r = obj.nums.a * 2)

function sum(a, b) {
  return a + b;
}

// shallow change
function change() {
  let e
  effect(() => { e = obj.b * 2 })
  return e
}

function deepChange(n) {
  obj.nums.a = n
  return r
}

// test('sum(2 + 2) 等于 4', () => {
//   expect(sum(2, 2)).toBe(4);
// })

test('shallow', () => {
  expect(change()).toBe(2);
})

test('deep', () => {
  let n = 10
  expect(deepChange(n)).toBe(n * 2);
})

