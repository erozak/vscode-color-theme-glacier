import { flatObject } from '../flatObject';

describe('utils/flatObject', () => {
  it('can flat the object', () => {
    expect(
      flatObject({
        a: 1,
        nested: {
          b: 2,
          c: 3,
        },
      }),
    ).toEqual({ 'a': 1, 'nested.b': 2, 'nested.c': 3 });
  });

  it('can flat the object with a mapping project', () => {
    expect(
      flatObject(
        {
          a: 1,
          nested: {
            b: 2,
            c: 3,
          },
        },
        (value: number) => value * 2,
      ),
    ).toEqual({ 'a': 2, 'nested.b': 4, 'nested.c': 6 });
  });
});
