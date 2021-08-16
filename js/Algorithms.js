var bubbleSort = function (numsArr) {
  for (let i = 0; i < numsArr.length; i++) {
    for (let j = 0; j < numsArr.length - i - 1; j++) {
      if (numsArr[j + 1] < numsArr[j]) {
        // ES6 way of swapping array elements
        [numsArr[j + 1], numsArr[j]] = [numsArr[j], numsArr[j + 1]];
      }
    }
  }
  return numsArr;
};

var sort = function (numsArr) {
  let newNum;
  console.log("SORT");
  SORTBTN.disabled = true;
  console.log(numsArr);
  for (let i = 0; i < numsArr.length; i++)
    for (let j = i; j < numsArr.length; j++)
      if (numsArr[i] > numsArr[j]) {
        newNum = numsArr[j];
        numsArr[j] = numsArr[i];
        numsArr[i] = newNum;
      }
  return numsArr;
};

var insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    // Start comparing current element with every element before it
    for (let j = i - 1; j > -1; j--) {
      // Swap elements as required
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

var selectionSort = function (arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    // Assume a minimum value
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // Swap if new minimun value found
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};

function merge(arr1, arr2) {
  // Make a new array, and 2 pointers to keep track of elements of arr1 and arr2
  let res = [],
    i = 0,
    j = 0;

  // Loop until either arr1 or arr2 becomes empty
  while (i < arr1.length && j < arr2.length) {
    // If the current element of arr1 is lesser than that of arr2, push arr1[i] and increment i
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  // Add the rest of the remining subarray, to our new array
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

// Recursive merge sort
var mergeSort = function (arr) {
  // Base case
  if (arr.length <= 1) return arr;

  // Splitting into two halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // merging the two sorted halves
  return merge(left, right);
};

function partition(arr, start = 0, end = arr.length - 1) {
  // Let's choose the pivot to be the arr[start] element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      // Swap current element with the element at the new pivot index
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }

  // Swap the pivot element with the element at the pivotIndex index
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];

  // Return the index of the pivot element after swapping
  return swapIdx;
}

var quickSort = function (arr, left = 0, right = arr.length - 1) {
  // Base case is that the left and right pointers don't overlap, after which we'll be left with an array of 1 item
  if (left < right) {
    let pivotIndex = partition(arr, left, right);

    // For left subarray, which is everything to the left of the pivot element
    quickSort(arr, left, pivotIndex - 1);

    // For the right sub array, which is everything to the right of the pivot element
    quickSort(arr, pivotIndex + 1, right);
  }
  // Return the array, when it's of length 1 i.e, left === right
  return arr;
};
