const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Remove articles: a, an, the
function strip(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort ignoring articles
const sortedBands = bands.sort((a, b) =>
  strip(a).localeCompare(strip(b))
);

// Output (if needed)
console.log(sortedBands);

// If using in webpage
document.getElementById('band').innerHTML =
  sortedBands.map(band => `<li>${band}</li>`).join('');