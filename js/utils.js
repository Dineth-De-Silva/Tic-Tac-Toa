// Normal functions
// Function to check a subset is a subset of parent set
function isSubsetOf(parentArr, subsetArr) {
  return subsetArr.every((element) => {
    return parentArr.includes(element);
  });
}
// Function to generate random integer between min (inclusive) and max (exclusive)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}