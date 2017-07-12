import JasmineExpect from 'jasmine-expect';
import { Storage } from './storage';

interface ITest {
  id: number;
  name: string;
}

describe('Storage', () => {
  let sut: Storage;
  beforeEach(() => {
    sut = new Storage(localStorage);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('set/get number', () => {
    sut.set('myKey', 12345);
    const result = sut.get('myKey', 0);
    expect(result).toBe(12345);
  });

  it('set/get number with default', () => {
    const result = sut.get('myKey', 0);
    expect(result).toBe(0);
  });

  it('set/get typesafe object', () => {
    const obj: ITest = { id: 12, name: 'test' };
    sut.set('myKey', obj);
    const result = sut.get<ITest>('myKey');
    expect(result.id).toBe(12);
  });

  it('keys', () => {
    sut.set('myKey', 12345);
    sut.set('abc', '11111');
    const result = sut.keys();
    expect(result).toEqual([ 'abc', 'myKey' ]);
  });

  it('rm', () => {
    sut.set('myKey', 12345);
    expect(sut.keys().length).toBe(1);
    sut.rm('myKey');
    expect(sut.keys().length).toBe(0);
  });

  it('prefix', () => {
    sut.prefix = 'myApp';
    sut.set('myKey', 12345);
    expect(Object.keys(localStorage)).toEqual([ 'myApp.myKey' ]);
  });

  it('flush', () => {
    sut.set('myKey', 12345);
    sut.set('abc', '11111');
    expect(sut.keys().length).toBe(2);
    sut.flush();
    expect(sut.keys().length).toBe(0);
  });
});
