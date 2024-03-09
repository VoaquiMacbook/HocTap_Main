const ageOne = [5, 2, 4, 1, 15, 8, 3, 10, 20];
const ageTwo = [16, 6, 10, 5, 6, 1, 4];

// Ghép hai mảng và loại bỏ các phần tử trùng lặp
const mergedArray = [...new Set(ageOne.concat(ageTwo))];

console.log(mergedArray);
