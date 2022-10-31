const array = [1, 1, 2, 5, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)]; //Lọc ra những giá trị xuất hiện 1 lần trong mảng

console.log(uniqueArray);
