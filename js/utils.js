// Normal functions
// Function to generate random integer between min (inclusive) and max (exclusive)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
