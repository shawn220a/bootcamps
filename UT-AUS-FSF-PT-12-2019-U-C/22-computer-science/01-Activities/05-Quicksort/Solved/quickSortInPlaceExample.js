var arr = [];
for (var index = 0, t = 400; index < t; index++) {
  arr.push(Math.round(Math.random() * t));
}

// var arr = [5, 3, 1, 6, 4, 2, 3, 7];

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, leftIndex, rightIndex) {
  var pivot = items[leftIndex]; // items[Math.floor((rightIndex + leftIndex) / 2)];
  var i = leftIndex - 1;
  var j = rightIndex + 1;

  while (i < j) {
    i++;
    j--;

    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i < j) {
      swap(items, i, j);
    }
  }
  return j;
}

function quickSort(items, leftIndex, rightIndex) {
  // console.log('calling quickSort(items, ', leftIndex, ', ', rightIndex, ')');
  var sortedPivot;

  if (rightIndex > leftIndex) {
    sortedPivot = partition(items, leftIndex, rightIndex); // partition returns the correct sorted position of the pivot
    // console.log('sortedPivot: ', sortedPivot);

    quickSort(items, leftIndex, sortedPivot);
    quickSort(items, sortedPivot + 1, rightIndex);
  }

  return items;
}

console.log("Pre Sort:", arr.join(" "));
var result = quickSort(arr, 0, arr.length - 1);
console.log("Post Sort:", result.join(" "));
console.log("DONE!");
