"use stirct";

/* Модудь 11*/


/* Модудь 11 / Задание 3 */

function getSum () {
      var result = 0;
      for (var i = 0; i < arguments.length; i++) {
      
        if(arguments[i] instanceof Array) {
        for (var j = 0; j < arguments[i].length; j++) {
        result += getSum (arguments[i][j]);
 }
       }else if(!isNaN(+arguments[i])) { 
        result += +arguments[i];
        }else{
        continue;
  }
 
};
        return result;
  };
  
  var sum = getSum(1, '1', 'one', [2,[ '2', 'two']]);
  alert( sum ); 
  