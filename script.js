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

// Function to remove articles
function strip(str) {
  return str.replace(/^(a |an |the )/i, '').trim();
}

// Sort bands
bands.sort((a, b) => strip(a).localeCompare(strip(b)));

// Display result
document.getElementById("band").innerHTML =
  bands.map(band => `<li>${band}</li>`).join('');