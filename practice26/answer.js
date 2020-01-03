function searchArray(haystack, needle) {
  let output = [];
  for (let index = 0; index < needle.length; index++) {
    if (haystack.indexOf(needle[index]) !== -1) {
      output.push(needle[index]);
    }
  }

  if (output.length === 0) {
    output = null;
  }

  return output;
}
