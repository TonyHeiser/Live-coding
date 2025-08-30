/*Генерация массива
  Напишите функцию generateArray(len, maxValue), 
  которая возвращает массив длиной len, 
  заполненный случайными положительными целыми числами от 0 до maxValue включительно

  Особые случаи:
  - Если len <= 0, вернуть пустой массив.
  - Если maxValue < 0, все элементы должны быть равны 0..
*/

function generateArray(len, maxValue) {
  return 0
}

// console.log(generateArray(5, 0)); // все элементы должны быть 0
// console.log(generateArray(10, 1)); // массив из 10 элементов, каждый 0 или 1
// console.log(generateArray(100, 5)); // массив из 100 элементов, каждый от 0 до 5 включительно
// console.log(generateArray(0, 10)); // пустой
// console.log(generateArray(1, 3)); // массив с одним элементом, который 0, 1, 2 или 3
// console.log(generateArray(-5, 10)); // пустой массив
// console.log(generateArray(5, -3)); // все элементы должны быть 0


/********************************************************************************************** */

/*Найти уникальное число
  Дан массив чисел, где все числа повторяются хотя бы дважды,
  кроме одного. Нужно найти это уникальное число.

  Пример:
  [ 1, 1, 2, 2, 3 ] -> 3
  [ 4, 5, 5, 4, 6 ] -> 6
*/

function findUniq(arr) {
  return arr
}

// console.log(findUniq([ 1, 1, 2, 2, 3 ])); // 3
// console.log(findUniq([ 4, 5, 5, 4, 6 ])); // 6
// console.log(findUniq([7, 2, 2, 2, 2])); // 7
// console.log(findUniq([4, 4, 9, 5, 5])); // 9
// console.log(findUniq([4, 4, 9, 5, 5])); // 9
// console.log(findUniq([6, 6, 6, 1])); // 1
// console.log(findUniq([-1, -1, -2, -2, -3])); // -3
// console.log(findUniq([1.1, 1.1, 2.2])); // -2.2
// console.log(findUniq([42])); // 42

/******************************************************************************************** */


/* Напишите функцию average(arr, divisor), которая:
  1. Принимает массив чисел, который может содержать:
    * вложенные массивы любой глубины
    * нечисловые значения (string, null, undefined, NaN).
  2. Фильтрует числа по правилу:
    * если divisor = 0 → берутся все числа,
    * если divisor ≠ 0 → берутся только числа, кратные divisor.
  3. Вычисляет среднее арифметическое выбранных чисел и округляет результат до ближайшего целого.
  4. Если после фильтрации нет чисел → возвращает 0.
*/

function average(arr, divisor) {
  return 0
};

// console.log(average([], 2)); // 0
// console.log(average([2, 4, 6], 2)); // 4
// console.log(average([1, 2, 3, 4, 5], 2)); // 3
// console.log(average([10, [20, [30]]], 10)); // 20
// console.log(average(["x", NaN, null, undefined, 15, 30], 15)); // 23
// console.log(average([1, 3, 5], 2)); // 0
// console.log(average([1, 2, 3], 1)); // 2
// console.log(average(["String", 20, [null, 9], undefined, [1000, 1, [NaN, 2, 3]]], 2)); // 341
// console.log(average([44, 22, 99, 33, 11, 55, 66, 77, 88], 1000)); // 0
// console.log(average([44, 22, 99, 33, 11, 0, 66, 77, 0], 0)); // 39

/************************************************************************************************** */


/*Поменять местами элементы массива
  Напишите функцию swapTwo(array, a, b), которая:
    1. Принимает массив array и два числа a и b.
    2. Меняет местами:
      * первое вхождение a
      * последнее вхождение b
    3. Остальные элементы остаются без изменений.
    4. Если a и b одинаковые, массив остаётся без изменений.
    5. Гарантируется, что a и b есть в массиве.
*/

function swapTwo(array, a, b) {
  return 0;
}

// console.log(swapTwo([1, 2, 3, 4], 2, 4)); // [1, 4, 3, 2]
// console.log(swapTwo([1, 2, 3, 4, 1, 2, 3, 4], 2, 4)); // [1, 4, 3, 4, 1, 2, 3, 2]
// console.log(swapTwo([1, 2, 3], 2, 2)); // [1, 2, 3]
// console.log(swapTwo([1, 1, 1, 2, 2, 2], 1, 2)); // [2, 1, 1, 2, 2, 1]
// console.log(swapTwo([0, -1, -2, 3], 0, -2)); // [-2, -1, 0, 3]


/********************************************************************************************************* */

/*Напиши функцию mergeArrays(arr1, arr2), которая принимает два массива чисел
 и возвращает отсортированный массив без повторяющихся элементов.
  Функция должна:
    1. Объединять оба массива в один.
    2. Упорядочивать элементы по возрастанию.
    3. Убирать дубликаты (если число встречается несколько раз, оставить только одно).
 */

function mergeArrays(arr1, arr2) {
  return 0;
}

// console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays([1, 2, 2], [2, 3, 3])); // [1, 2, 3]
// console.log(mergeArrays([5, 10, 15], [10, 20, 25])); // [5, 10, 15, 20, 25]
// console.log(mergeArrays([-5, -1, 0], [-10, -1, 5])); // [-10, -5, -1, 0, 5]
// console.log(mergeArrays([], [])); // []
// console.log(mergeArrays([], [1, 2, 3])); // [1, 2, 3]
// console.log(mergeArrays([1000, 50], [999, 1000])); // [50, 999, 1000]


/*********************************************************************************** */

/* Расширить прототип массива (Array.prototype),
добавив несколько полезных методов:
  1. anyMatch(predicate)
    * Принимает функцию-условие (предикат).
    * Возвращает true, если хотя бы один элемент массива удовлетворяет условию.
    * [1, 2, 3].anyMatch(n => n > 2); // true
  2. allMatch(predicate)
    * Принимает функцию-условие.
    * Возвращает true, если все элементы массива удовлетворяют условию.
    * [1, 2, 3].allMatch(n => n > 0); // true
  3. product()
    * Возвращает произведение всех чисел массива
    * Если массив [2, 2, 2], результат будет 8.
    * [2, 3, 4].product(); // 24
  4. reverseStrings()
    * Возвращает новый массив, где все строки из исходного массива перевёрнуты.
    * Остальные элементы оставляются без изменений.
    * ["hello", "world", 123].reverseStrings(); // ["olleh", "dlrow", 123]
 */

function addSomeNewMethods() {
  Array.prototype.anyMatch = function(predicate) {
    return 0
  }

  Array.prototype.allMatch = function(predicate) {
    return 0
  }

  Array.prototype.product = function() {
    return 0
  };

  Array.prototype.reverseStrings = function() {
    return 0
  }

  let arr1 = [1, 2, 3];
  console.log(arr1.anyMatch(n => n > 2)); // true
  console.log(arr1.anyMatch(n => n > 5)); // false
  console.log(arr1.allMatch(n => n > 0)); // true

  arr1 = [1, 2, -3];
  console.log(arr1.allMatch(n => n > 0)); // false
  
  arr1 = [2, 3, 4];
  console.log(arr1.product()); // 24
  
  arr1 = [10];
  console.log(arr1.product()); // 10
  console.log([].product()); // 1

  arr1 = ["uabys", "syk"];
  console.log(arr1.reverseStrings()); // [ 'sybau', 'kys' ]

  arr1 = ["WFSN", 18, "yssup", "knuks"]
  console.log(arr1.reverseStrings()); // [ 'NSFW', 18, 'pussy', 'skunk' ]
}

// addSomeNewMethods();