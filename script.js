//ЗАДАЧА 1

let arr = [
  [1],
  [3, 5],
  [7, 9, 11],
  [13, 15, 17, 19],
  [21, 23, 25, 27, 29]
];

function rowSumOddNumbers(i) {
  if (Number.isNaN(Number.parseInt(i))) {
      return 'Введите число!';
  }

  if (i < 0 || i > arr.length) {
      return 'Выход за пределы массива!'
  }

  let sum = 0;
  let data = arr[i - 1];

  for (let j = 0; j < data.length; j++) {
      sum = sum + data[j];
  }

  return sum;
}

console.log(rowSumOddNumbers(3));

