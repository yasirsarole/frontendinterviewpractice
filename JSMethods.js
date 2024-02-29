// - JavaScript Array some()
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method returns true (and stops) if the function returns true for one of the array elements.
const ages = [3, 10, 18, 20];
ages.some(function (age) {
  return age > 18;
});
