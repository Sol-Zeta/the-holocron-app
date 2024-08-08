import { formatAttribute, getCharacterId, getDateString } from '../index';

describe('getCharacterId', () => {
  it('should return the id of a url', () => {
    expect(getCharacterId('https://swapi.co/api/people/1/')).toBe('1');
  });
  it('should return an empty string if no param is passed', () => {
    expect(getCharacterId('')).toBe('');
  });
});

describe('getDateString', () => {
  it('should return the expected string', () => {
    expect(getDateString('2014-12-09T13:50:51.644000Z')).toBe(
      'December 9, 2014'
    );
  });
  it('should return an empty string if the param is undefined', () => {
    expect(getDateString('')).toBe('');
  });
});

describe('formatAttribute', () => {
  it('should capitalize the input and replace "_" with a blank space ', () => {
    expect(formatAttribute('attribute_to_transform')).toBe(
      'Attribute to transform'
    );
  });
  it('should return an empty string if the param is undefined', () => {
    expect(getDateString('')).toBe('');
  });
});
