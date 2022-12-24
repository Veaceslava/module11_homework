"use stirct";

/* Модудь 11*/


/* Модудь 11 / Задание 5 */

function pow(x, n) {
  var result = x; {
      result *= x;
  }
  return result;
}
var x = prompt("x?", '');
var n = prompt("n?", '');
if (n <= 1) {
  alert('Степень ' + n +
      'не поддерживается, введите целую степень, большую 1'
      );
} else {
  alert( pow(x, n) );
}