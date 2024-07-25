export const getCharacterId = (url: string) => {
  if (!url) return '';
  const splitedUrl = url.split('/');
  return splitedUrl[splitedUrl.length - 2];
};

export const getDateString = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
};

export const formatAttribute = (attribute: string) => {
  const withSpaces = attribute.replace(/_/g, ' ');
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
};
