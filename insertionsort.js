// Example test case
const testArr = [7, 2, 9, 4, 1, 6];
console.log('Original array:', testArr);
const sortedArr = insertionSort([...testArr]);
console.log('Sorted array:', sortedArr);
// Function to perform insertion sort on an array
function insertionSort(arr) {
  // Step 1: Loop through the array starting from index 1
  for (let i = 1; i < arr.length; i++) {
    // Store the value to insert
    let current = arr[i];
    // Set up a variable to track the position
    let j = i - 1;
    // Shift elements of the sorted section to the right
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Insert the current value into its correct position
    arr[j + 1] = current;
  }
  // Return the sorted array
  return arr;
}
// Function to perform insertion sort on an array
function insertionSort(arr) {
  // Step 1: We'll implement the logic here
}