var bubbleSort = function (numsArr) {
  for (let i = 0; i < numsArr.length; i++) {
    for (let j = 0; j < numsArr.length - i - 1; j++) {
      if (numsArr[j + 1] < numsArr[j]) {
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
    for (let j = i - 1; j > -1; j--) {
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
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};

function merge(arr1, arr2) {
  let res = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

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

var mergeSort = function (arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

function partition(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }

  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];

  return swapIdx;
}

var quickSort = function (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);

    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};
