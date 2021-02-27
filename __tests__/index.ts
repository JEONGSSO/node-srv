describe('index.ts', () => {
  const add = (...rest: number[]): number =>
    rest.reduce((val, acc) => val + acc);

  test('Add Function Test', () => {
    expect(add(2, 3, 3, 4, 5, 6, 6)).toBe(29);
  });

  test.skip('first character upperCase converter', () => {
    const arr: string[] = ['aaa', 'bbb', 'ccc', ''];

    const converter = (string: string) =>
      string.charAt(0).toLocaleUpperCase() + string.substr(1);
    const falsyValueFilter = (arr: string[]) => arr.filter((v) => v);

    const result = falsyValueFilter(arr).map((v) => converter(v));

    expect(result).toStrictEqual(['Aaa', 'Bbb', 'Ccc']);
  });
});
