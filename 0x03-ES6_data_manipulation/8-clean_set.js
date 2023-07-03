const cleanSet = (set, startString) => {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const filteredValues = Array.from(set).filter((value) => typeof value === 'string' && value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.slice(startString.length));
  return cleanedValues.join('-');
};

export default cleanSet;
