describe('globalThis', () => {
  test('Polyfill', () => {
    require('./index');
    expect(globalThis).not.toBeUndefined();
    expect(globalThis.constructor.name).toEqual(`Window`);
  });
});
