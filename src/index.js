module.exports = function toReadable (number) {
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let result = ''

  if (number < 10) {
    result = digits[number];
  } else if (number < 20) {
    result = teens[number - 10];
  } else if (number < 100) {
    result = `${tens[Math.floor(number / 10)]} ${number % 10 > 0 ? toReadable(number % 10) : ''}`;
  } else if (number < 1000) {
    result = `${digits[Math.floor(number / 100)]} hundred ${number % 100 > 0 ? toReadable(number % 100) : ''}`;
  }

  return result.trim();
}
