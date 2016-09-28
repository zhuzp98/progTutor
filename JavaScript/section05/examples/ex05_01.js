var arr = [1, 3, 5, 7, 9, 10, 11];

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];

    console.log("Array at " + i + " = " + arr[i]);
}
console.log(arr);