const palindromes = function (str) {
  // Remove all whitespace and convert to lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');
  // Compare the cleaned string with its reverse
  return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
