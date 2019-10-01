import fizzbuzzify from 'fizzbuzzify';
import {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
} from './assignment';

const spy = jest.spyOn(global.console, 'log');

describe('javascript-introduction assignments', () => {
  test('first', () => {
    spy.mockClear();
    expect(first).toBeInstanceOf(Function);
    first();
    expect(spy).toHaveBeenCalledTimes(6);
    expect(typeof spy.mock.calls[0][0]).toBe('number');
    expect(typeof spy.mock.calls[1][0]).toBe('string');
    expect(typeof spy.mock.calls[2][0]).toBe('boolean');
    expect(spy.mock.calls[3][0]).toBeNull();
    expect(spy.mock.calls[4].length).toBe(2);
    expect(spy.mock.calls[5].length).toBe(3);
  });

  test('second', () => {
    expect(second).toBeInstanceOf(Function);

    [1, '2', true, null, undefined].forEach((value) => {
      expect(second(value)).toBe(typeof value);
    });
  });

  test('third', () => {
    expect(third).toBeInstanceOf(Function);

    for (let i = 0; i < 20; i += 1) {
      const a = Math.random();
      const b = Math.random();

      expect(third.call(null, a, b)).toBe(Math.max(a, b));
    }
  });

  test('fourth', () => {
    expect(fourth).toBeInstanceOf(Function);

    for (let i = 0; i < 20; i += 1) {
      const args = [
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
      ];

      expect(fourth(...args)).toBe(Math.max(...args));
    }
  });

  test('fifth', () => {
    spy.mockClear();
    expect(fifth).toBeInstanceOf(Function);
    fifth();
    const length = 100;
    expect(spy).toHaveBeenCalledTimes(length);
    expect(spy.mock.calls.every((call, ix) => String(call[0]) === fizzbuzzify(ix + 1))).toBe(true);
  });

  test('sixth', () => {
    spy.mockClear();
    expect(sixth).toBeInstanceOf(Function);
    sixth();
    expect(spy).toHaveBeenCalledTimes(7);
    expect(spy.mock.calls.every((call, ix) => call[0].replace(/[^#]/g, '').length === ix + 1)).toBe(true);
  });
});
