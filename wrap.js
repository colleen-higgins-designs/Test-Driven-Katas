function wrap(str, col) {
  if (str.length <= col) {
    return str;
  } else {
    const strArray = str.split(' ');
    return strArray.reduce((newStr, word) => {
      const startIdx =
        newStr.lastIndexOf('\n') === -1 ? 0 : newStr.lastIndexOf('\n') + 1;
      const tempStr = newStr + ' ' + word;
      if (tempStr.substring(startIdx).length <= col) {
        return tempStr;
      } else {
        return `${newStr}\n${word}`;
      }
    });
  }
}

module.exports = wrap;
