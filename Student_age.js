const ages = [19, 22, 19, 24, 20, 23, 21, 24, 25, 24];

// Sort the array
const sortedAges = ages.slice().sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

console.log(`Sorted Ages: ${sortedAges}`);
console.log(`Min Age: ${minAge}`);
console.log(`Max Age: ${maxAge}`);

// Find the median age
const middleIndex = Math.floor(sortedAges.length / 2);
let median;
if (sortedAges.length % 2 === 0) {
  median = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
} else {
  median = sortedAges[middleIndex];
}

console.log(`Median Age: ${median}`);

// Find the average age
const sum = sortedAges.reduce((acc, age) => acc + age, 0);
const average = sum / sortedAges.length;

console.log(`Average Age: ${average}`);

// Find the range of the ages
const range = maxAge - minAge;

console.log(`Range of Ages: ${range}`);

// Compare (min - average) and (max - average)
const minDiff = Math.abs(minAge - average);
const maxDiff = Math.abs(maxAge - average);

console.log(`Difference between Min and Average: ${minDiff}`);
console.log(`Difference between Max and Average: ${maxDiff}`);
