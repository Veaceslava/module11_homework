"use stirct";

/* Модудь 11*/


/* Модудь 11 / Задание 1 */

let arr = [2, 4, 6, 8, 3, 5, 7];
let even = 0;
let odd = 0;
for (let key of arr) {

  if (key % 2 == 0) {
    console.log('Четное:', key);
    even++;
  } else if (key % 2 ==1) {
    console.log('Нечетное:', key);
    odd++;
  }
}
console.log('Количество четных чисел:', even);
console.log('Количество нечетных чисел:', odd);