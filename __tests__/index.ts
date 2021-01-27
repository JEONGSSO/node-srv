
describe('index.ts', () => {
   const add = (a:number, b:number): number => a + b;

   test.skip('Add Function Test', () => {
      expect(add(2, 3)).toBe(5)
   })

   test('first character upperCase converter', () => {
      const arr:string[] = ['aaa', 'bbb', 'ccc', '']

      const converter = (string :string) => string.charAt(0).toLocaleUpperCase() + string.substr(1)
      const falsyValueFilter = (arr :string[]) => arr.filter((v) => v)

      const result = falsyValueFilter(arr)
                  .map((v) => converter(v))

      expect(result).toStrictEqual(['Aaa','Bbb', 'Ccc'])

   })
})