function getArrayParams(...arr) {
  const min = Math.min(...arr);  // Находим минимальное значение
  const max = Math.max(...arr);  // Находим максимальное значение
  const avg = +(arr.reduce((sum, value) => sum + value, 0) / arr.length).toFixed(2);  // Находим среднее и округляем

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((sum, value) => sum + value, 0);
}


function differenceMaxMinWorker(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}


function differenceEvenOddWorker(...arr) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let value of arr) {
    if (value % 2 === 0) {
      sumEven += value;
    } else {
      sumOdd += value;
    }
  }

  return sumEven - sumOdd;
}


function averageEvenElementsWorker(...arr) {
  let sumEven = 0;
  let countEven = 0;

  for (let value of arr) {
    if (value % 2 === 0) {
      sumEven += value;
      countEven++;
    }
  }

  if (countEven === 0) return 0;  // Если четных элементов нет
  return sumEven / countEven;
}


function makeWork(arrOfArr, func) {
  let maxResult = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxResult) {
      maxResult = result;
    }
  }

  return maxResult;
}

//Задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;  // Проверка на пустой массив
  return arr.reduce((sum, value) => sum + value, 0);  // Сумма всех элементов
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;  // Проверка на пустой массив
  const min = Math.min(...arr);  // Минимум
  const max = Math.max(...arr);  // Максимум
  return max - min;  // Разница между максимумом и минимумом
}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;  // Проверка на пустой массив

  let sumEven = 0;  // Сумма чётных
  let sumOdd = 0;   // Сумма нечётных

  for (let value of arr) {
    if (value % 2 === 0) {
      sumEven += value;  // Если чётный, добавляем к сумме чётных
    } else {
      sumOdd += value;   // Если нечётный, добавляем к сумме нечётных
    }
  }

  return sumEven - sumOdd;  // Разница между суммами чётных и нечётных
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;  // Проверка на пустой массив

  let sumEven = 0;   // Сумма чётных элементов
  let countEven = 0; // Количество чётных элементов

  for (let value of arr) {
    if (value % 2 === 0) {
      sumEven += value;  // Если чётный, добавляем к сумме чётных
      countEven++;       // Увеличиваем счётчик чётных элементов
    }
  }

  if (countEven === 0) return 0;  // Если нет чётных элементов, возвращаем 0
  return sumEven / countEven;  // Возвращаем среднее значение
}

//Задача 3

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;  // Инициализация максимального результата

  for (let arr of arrOfArr) {
    const result = func(...arr);  // Применяем функцию-насадку к массиву
    if (result > maxWorkerResult) {
      maxWorkerResult = result;  // Обновляем максимальный результат, если текущий больше
    }
  }

  return maxWorkerResult;  // Возвращаем максимальный результат
}




