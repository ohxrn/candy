var arr = [4, 6, 1, 999, 32, 3, 82, 37];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);