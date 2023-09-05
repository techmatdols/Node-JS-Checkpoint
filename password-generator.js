const passwordGenerator = require('generate-password');

// Generate a random password
const password = passwordGenerator.generate({
  length: 12, // Adjust the length as needed
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true,
});

console.log('Generated Password:', password);
