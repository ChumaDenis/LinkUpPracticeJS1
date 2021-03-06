// Краще використовувати стрілкову функцію (arrow function). Поситай різницю між ними
// const Print = () => {...}

let i = 0;
function Print(n, arguments, func) {
  console.log(`${n}. ${func.name}(${arguments}) -> ${func(arguments)}`);
}

//____________(1)_______________________________________________________________________________________________________
function countTrue(array) {
  // Це можна переробити у 2 рядки за допомогою методу масива filter і не використовуючи цикл. Подумай як це можна переробити
  let count = 0;
  for (let i of array) {
    /**
     * Якщо в тебе є перевірка якась, то тобі достатньо писати просто змінну (можна використовувати ше ! і !!б почитай про це)
     * Також почитай в яких випадках змінна поверне тобі true, а коли false
     * if(i){
     *   count++;
     * }
     */
    if (i === true) {
      count++;
    }
  }
  return count;
}
Print(++i, [false, true, false], countTrue);

//____________(2)_______________________________________________________________________________________________________
function jazzify(array) {
  let tempArray = [];
  // Тут також можна обійтися без циклу, за допомогою методу map. Почитай як він працює і перероби на нього
  for (let i of array) {
    // За допомогою методу slice, можна набагато спростити діставання останьої букви. Почитай про нього і спрости
    if (i[i.length - 1] !== "7") tempArray.push(i + "7");
    else tempArray.push(i);
  }
  return tempArray;
}
Print(++i, ["Dm", "G7", "E", "A"], jazzify);

//____________(3)_______________________________________________________________________________________________________
/**
 * Це мені дуже не подобається.
 * Якщо не враховувати те, що тут все можна спростити за допомогою методів масиву/стрічки, тут можна було простіше все зробити
 */

function sortDescending(num) {
  /**
   * А якщо ми передамо 0?
   * Не логічно, ти мусиш шось показати користувачеві, навіть, якщо це 0
   */
  if (typeof num === "number" && num > 0) {
    /**
     * Навіщо це переприсвоєння?
     * Не логічно, бо ти потім це показуєш як початкове число, але це не так, це його копія
     * За те потім оригінальне число ти переписуєш на 0, що також не логічно, бо ти отримуєш нове посортоване
     */
    let firstNum = num;
    /**
     * Наступні 4 рядки можна переписати в один рякок
     * Спочатку тобі треба зробити з числа стрічку. Тут добре, використав toString()
     * Потім тобі потрібно зробити з стрічки масив. Для цього є спеціальний метод, знайдеш в інтернеті і переробиш
     * Дальше тобі треба використати метод масиву, яки перебирає кожен елемент і повертає новий масив. Це метод map. Почитай
     * Дальше посортувати за спаданням за допомогою sort (Ти його використовуєш, але воно повинно сорутвати за зрозстанням, бо ти не задав ніяких умов сортування, я не розумію поки як воно в тебе працює, що за спаданням)
     * Дальше вернути стрінгу за допомогою методу масиву. Знайдеш в інтернеті
     * Дальше конвертнути стрінгу в number
     *
     * Це все можна зробити в 1 рядко, якщо використати правильні методи масиву. Спробуй сам, якщо не вийде, то я підскажу
     */
    let tempArray = [];
    for (let i of num.toString()) {
      tempArray.push(Number(i));
    }

    tempArray.sort();
    // Не розумію логіки того, що відбувається в наступних рядках, до ретурну, взагалі.
    num = 0;
    let n = 0;
    for (let i of tempArray) num += i * Math.pow(10, n++);

    return `(${firstNum}) -> ${num}`;
  }
}
Print(++i, 1254859723, sortDescending);

//____________(4)_______________________________________________________________________________________________________
/**
 * Тут окей впринципі, але деякі рекомендації щодо стилю написання коду
 * Використовуй стрілочні функції в анонісних функціях
 * Якщо в тебе функція щось повертає і вона просто в один рядко (так як в тебе в сортуванні), то можна не писати return, а одразу повертати значення
 * (a,b)=> a.length - b.length
 */

function sortByLength(array) {
  return `(${array}) -> ${array.sort(function (a, b) {
    return a.length - b.length;
  })}`;
}
Print(++i, ["Leonardo", "Michelangelo", "Raphael", "Donatello"], sortByLength);

//____________(5)_______________________________________________________________________________________________________
function minMax(array) {
  // Тут добре, але можна було ще скоротити: return  [Math.min(...array), Math.max(...array)]
  let min = Math.min(...array),
    max = Math.max(...array);
  return [min, max];
}
Print(++i, [1, 2, 3, 4, 5], minMax);

//_____________(6)______________________________________________________________________________________________________
function findLargestNums(array) {
  // Тут впринципі нормально, але все можна скоротити просто використавши метод масиву map
  let tempArray = [];
  for (let i of array) {
    tempArray.push(Math.max(...i));
  }
  return tempArray;
}
Print(
  ++i,
  [
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ],
  findLargestNums
);

//_____________(7)______________________________________________________________________________________________________
class Calculator {
  constructor() {}
  /**
   * Тут можна спростити: typeof a === "number" && typeof b === "number" і так повертає тобі true чи false
   * Подумай, як можна скоротити цю перевірку
   */
  check(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return true;
    } else false;
  }

  // В наступних функіях тобі не обво'язково використовувати else. Якщо іфка пройде, то ти з нех ретурниш, відповідно воно далі не піде

  add(a, b) {
    if (this.check(a, b)) {
      return a + b;
    } else return NaN;
  }
  subtract(a, b) {
    if (this.check(a, b)) {
      return a - b;
    } else return NaN;
  }
  multiply(a, b) {
    if (this.check(a, b)) {
      return a * b;
    } else return NaN;
  }
  divide(a, b) {
    if (this.check(a, b) && b !== 0) {
      return a / b;
    } else return NaN;
  }
}
let calculator = new Calculator();
console.log(
  `${++i}. ${calculator.multiply.name}(5,10) -> ${calculator.multiply(5, 10)}`
);

//_____________(8)______________________________________________________________________________________________________
function keysAndValues(array) {
  // Це все можна зробити без простіше, без map. Почитай які ше проперті є в Objec, які би тобі могли допомогти
  let keys = Object.keys(array),
    values = keys.map(function (key) {
      return array[key];
    });

  return [keys, values];
}
Print(++i, { key1: true, key2: false, key3: undefined }, keysAndValues);

//_____________(9)______________________________________________________________________________________________________
function ascDesNone(array, mode) {
  // Мені не подобається кількість if/else.
  // Перероби це через swich case. Це зробить код читабельнішим і якщо ти добре напишиш, то ше й скоротить його
  // І не варто створювати окрему змінну на яку асайти функцію, простіше одразу виконати сорутвання і вийти з функції
  if (mode !== "None") {
    let modeFunc;
    if (mode === "Asc")
      modeFunc = function (a, b) {
        return a - b;
      };
    else if (mode === "Des")
      modeFunc = function (a, b) {
        return b - a;
      };
    else return NaN;
    return array.sort(modeFunc);
  }
  return array.sort();
}
console.log(
  `${++i}. ${ascDesNone.name}([4, 3, 2, 1], "Asc") -> ${ascDesNone(
    [4, 3, 2, 1],
    "Asc"
  )}`
);

//_____________(10)_____________________________________________________________________________________________________

// Завдання не відповідає вимогам
// Print(++i, [4, [1], 3], sortIt); повертає не той результат, який мало би
function sortIt(arr) {
  return arr.sort((a, b) => {
    let num1 = typeof a === "number" ? a : a[0];
    let num2 = typeof b === "number" ? b : b[0];
    return num1 - num2;
  });
}

Print(++i, [4, [1], 3], sortIt);
//_____________(11)_____________________________________________________________________________________________________

// Це мені також взагалі неподобається, багато циклів, якісь не зрозумілі змінні
function hasHiddenFee(arrayOfPrices, total) {
  // Це все (до totalPrice) можна переробити в один рядок використовуючи map
  let array = [];
  for (let i of arrayOfPrices) {
    let price = "";
    // В тебе долар завжди перший, нашо тобі запускати цикл, чому просто не взяти всі значчення окрім першого з стрінги? Для цього є метод стрічки, почитай
    for (let j of i) if (j !== "$") price += j;
    array.push(Number(price));
  }

  // Тут те саме, який цикл? А якщо в тебе міліард доларів, то воно буде кожен раз бігти по кожному символу?
  // Чому просто не видалити перший елемент з стрінги
  let totalPrice = "";
  for (let j of total) if (j !== "$") totalPrice += j;

  // Тут в тебе ітак те, що ти робиш в if повертає булеве значенея, це можна спростити.
  if (
    // То шо використав reduce це добре (догадуюся, що просто скопіпастив з гугла, але сподіваюся, що розібрався як він працює)
    // Але це не добре робити таке в if, таке виноситься в окрему змінну
    array.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      null
    ) < Number(totalPrice)
  )
    return true;
  else return false;
}
hasHiddenFee(["$1", "$2", "$3"], "$6");
console.log(
  `${++i}. ${hasHiddenFee.name}(["$1", "$2", "$3"], "$6") -> ${hasHiddenFee(
    ["$1", "$2", "$3"],
    "$6"
  )}`
);

//_____________(12)_____________________________________________________________________________________________________
// Тут добре
function trace(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) sum += array[i][i];
  return sum;
}

Print(
  ++i,
  [
    [1, 4],
    [4, 1],
  ],
  trace
);

//_____________(13)_____________________________________________________________________________________________________
// Тут ок. Можна трохи спристити, одразу ретурнити те, що повертаж регекс
function removeSpecialCharacters(str) {
  let stringToReplace = str.replace(/[!@#$%^&*()|.\\]/gi, "");
  return stringToReplace;
}

Print(++i, "%fd76$fd(-)6GvKlO.", removeSpecialCharacters);

//_____________(14)_____________________________________________________________________________________________________
function mathExpr(str) {
  const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
  return re.test(str);
}
Print(++i, "4*6", mathExpr);

//_____________(15)_____________________________________________________________________________________________________
// Тут ок. Але можна не писати else, бо в тебе ітак ретурниться значення
function pentagonal(n) {
  if (n > 0) {
    return (5 * Math.pow(n, 2) - 5 * n + 2) / 2;
  } else return NaN;
}
Print(++i, 8, pentagonal);

//_____________(16)_____________________________________________________________________________________________________
// Тут ок
function tempConversion(temp) {
  let F = (temp * 9) / 5 + 32;
  let K = temp + 273.15;
  return [F, K];
}
Print(++i, 300.4, tempConversion);

//_____________(17)_____________________________________________________________________________________________________

// Тут більш-менш ок
// Якщо ти створює якісь змінні з статисним значенням, то пиши чому саме таке значить ти йому задав, бо на поки я не розбрівся, що ти робиш дальше, я не розумв, чому m 122
// m - константа
// нема сенсу ініціалізовувати i на початку, краще там, де ти безпосередньо даєш їй значення
// Якщо в тебе нема стрінги, то краще повертай якийсь інший меседж про помилку або тд, бо при тестуванні можна пропустити баг)
function missingLetter(str) {
  let i,
    j = 0,
    m = 122;
  if (str) {
    i = str.charCodeAt(0);
    while (i <= m && j < str.length) {
      if (String.fromCharCode(i) !== str.charAt(j)) {
        return String.fromCharCode(i);
      }
      i++;
      j++;
    }
  }
  return "No Missing Letter";
}
Print(++i, "mnopqs", missingLetter);
