const add = (...rest: number[]): number => rest.reduce((val, acc) => val + acc);

// const test1 :Function = (a:number, b: number, fn: Function) => fn(a ,b)
// const tt = test1(2, 3, add)

// const test2 = (a:number) => (b:number) => (fn:Function) :Function | number => fn(a ,b)
// const tt = test2(2)(3)
// const tt = test2(2)(3)(add)
// console.log(tt(add))

// const test3 = (a:number, nums:number[], ...rest:(string|number)[]) => nums.reduce((a:number, b:number, i:number):number => {
//    if (!i) console.log(rest);
//    return a + b
// }, 0)
// const numArray:number[] = [1, 2, 3, 4, 5]

// console.log(test3(1, numArray, 'good1', 2))

const withCount = (fn: Function) => {
   let count = 0;
   return (...args: number[]) => {
      console.log(`Count: ${++count}`)
      return fn(...args)
   }
}

const countedAdd = withCount(add);

console.log(countedAdd(1, 1, 2))
console.log(countedAdd(1, 2))
console.log(countedAdd(1, 3))

