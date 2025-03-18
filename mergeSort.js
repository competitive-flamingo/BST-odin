function mergeSort(arr, s = 0, e = arr.length - 1) {
  if (e - s + 1 <= 1) return arr;
  let mid = Math.floor((s + e) / 2);
  mergeSort(arr, s, mid);
  mergeSort(arr, mid + 1, e);
  merge(arr, s, mid, e);
  return arr;
}

function merge(arr, s, mid, e) {
  const length1 = mid - s + 1;
  const length2 = e - mid;
  let L = new Array(length1);
  let R = new Array(length2);

  for (let i = 0; i < length1; i++) {
    L[i] = arr[s + i];
  }
  for (let i = 0; i < length2; i++) {
    R[i] = arr[mid + 1 + i];
  }

  let i = 0,
    j = 0,
    k = s;
  while (i < length1 && j < length2) {
    if (L[i] < R[j]) {
      arr[k] = L[i++];
    } else {
      arr[k] = R[j++];
    }
    k++;
  }

  while (i < length1) {
    arr[k++] = L[i++];
  }

  while (j < length2) {
    arr[k++] = R[j++];
  }
}

export function sortNoDuplicates(arr) {
  mergeSort(arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || newArr[newArr.length - 1] !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  arr.length = 0;
  for (let val of newArr) {
    arr.push(val);
  }
}

let arr = [2, 3, 1, 4, 2, 3, 4];
sortNoDuplicates(arr);
