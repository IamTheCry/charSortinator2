const sorter = (str) => {
  str.split('')
  .sort((a, b) => a < b)
  .join('');
}
