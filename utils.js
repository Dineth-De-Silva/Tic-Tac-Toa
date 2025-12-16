// Normal functions
// Function to check a subset is a subset of parent set
function isSubsetOf(parentArr, subsetArr) {
  // The 'every' method checks if all elements in the subsetArr pass a test.
  return subsetArr.every((element) => {
    // The test is whether the parentArr includes the current element.
    return parentArr.includes(element);
  });
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}