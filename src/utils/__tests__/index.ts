import {
  formatAttribute,
  getCharacterId,
  getDateString,
  isValidUrl,
} from '../index';

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

describe('isValidUrl', () => {
  it('should return true for a valid URL', () => {
    expect(isValidUrl('https://www.example.com')).toBe(true);
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('https://example.com/path?query=param')).toBe(true);
  });

  it('should return false for an invalid URL', () => {
    expect(isValidUrl('not-a-url')).toBe(false);
    expect(isValidUrl('')).toBe(false);
    expect(isValidUrl('https://')).toBe(false);
  });

  it('should return false for non-string values', () => {
    expect(isValidUrl(123 as any)).toBe(false);
    expect(isValidUrl({} as any)).toBe(false);
    expect(isValidUrl([] as any)).toBe(false);
    expect(isValidUrl(null as any)).toBe(false);
  });
});
