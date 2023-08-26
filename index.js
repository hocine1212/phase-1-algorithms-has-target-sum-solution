function hasTargetSum(array, target) {
  // Write your algorithm here
  /*
  Expect the function hasTargetSum that take two arguments and array and a target number this function should return true if there was two numbers summation is equal to the target number and if we didn't find any pair of numbers that fulfill this condition it return false
  */

  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) return true;
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n)
  space: O(n)
*/

/* 
  Add your pseudocode here
  initialize an empty Set
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    (for example: if our number is 2, and the target is 5, the complementary number is 3)
    check if the Set includes the complement using has
     if so, return true
    add the current number to the set so we can check it later against other numbers
  if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  the function hasTargetSum take two arguments and array and a target number this function we initialize an empty set to keep track of the numbers then we iterate over the array of numbers, so for the current number, we identify a complementary number that adds to our target then we check if the Set includes the complementary number using has method and if it does the function returns true anf if not we add the current number to the set so we can check it later against other numbers and if we reach the end of the array without any match the function should return false
 */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
