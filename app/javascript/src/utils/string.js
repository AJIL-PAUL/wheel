const truncateSentence = (str, length) => {
  if (str.length <= length) return str;

  const subString = str.substr(0, length - 1);

  return `${subString.substr(0, subString.lastIndexOf(" "))}...`;
};

export { truncateSentence };
