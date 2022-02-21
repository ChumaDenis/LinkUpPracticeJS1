let i=0;
const Print=(n, arguments, func)=>{
    console.log(`${n}. ${func.name}(${arguments}) -> ${func(arguments)}`)
}


//____________(1)_______________________________________________________________________________________________________
function countTrue(array){
    return array.filter(array => array===true).length;
}
Print(++i, [false, true,false, true], countTrue);


//____________(2)_______________________________________________________________________________________________________
function jazzify(array){
    let tempArray=array.map(
        item=>{
            let number="7";
            if(item.slice(-1)===number)return item;
            return item+number;
        }
    );
    return tempArray;
}
Print(++i, ["Dm", "G7", "E", "A"], jazzify);

//____________(3)_______________________________________________________________________________________________________
function sortDescending(num){
    if(typeof num ==='number' && (num>0)){
        //num.toString().split("").map(item=>Number(item)).sort((a, b)=>b-a).map(item=>item.toString()).join('')
        //Мені стало кумедно, що це все можна зробити одним рядком, проте мені здається для підвищення читабельності
        //варто розбити по блоках
        num=num.toString().split("").map(item=>Number(item));
        num=num.sort((a, b)=>b-a).map(item=>item.toString());
        return num.join('');
    }
    return NaN;
}
Print(++i, 1254859723, sortDescending);

//____________(4)_______________________________________________________________________________________________________
function sortByLength(array){
    return `(${array}) -> ${array.sort((a,b)=> a.length - b.length)}`;
}
Print(++i, ["Leonardo", "Michelangelo", "Raphael", "Donatello"], sortByLength);

//____________(5)_______________________________________________________________________________________________________
function minMax(array){
    return [Math.min(...array), Math.max(...array)];
}
Print(++i, [1, 2, 3, 4, 5], minMax);

//_____________(6)______________________________________________________________________________________________________
function findLargestNums(array){
    return array.map(item=>Math.max(...item));
}
Print(++i, [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]], findLargestNums);

//_____________(7)______________________________________________________________________________________________________
class Calculator{
    constructor() {}
    check(a, b){
        return typeof a === 'number' && typeof b==='number';
    }
    //щодо попереднього, то я зрозумів, що все таки код не варто писати пізно в ночі)))

    add(a, b){
        if(this.check(a, b)){
            return a+b;
        }
        return NaN;
    }
    subtract(a, b){
        if(this.check(a, b)){
            return a-b;
        }
        return NaN;
    }
    multiply(a, b){
        if(this.check(a, b)){
            return a*b;
        }
        return NaN;
    }
    divide(a, b){
        if(this.check(a, b)&& b!==0){
            return a/b;
        }
        return NaN;
    }
}
let calculator = new Calculator()
console.log(
    `${++i}. ${calculator.multiply.name}(5,10) -> ${calculator.multiply(5, 10)}`
)

//_____________(8)______________________________________________________________________________________________________
function keysAndValues(array){
    return [Object.keys(array), Object.values(array)];
}
Print(++i, { key1: true, key2: false, key3: undefined }, keysAndValues);

//_____________(9)______________________________________________________________________________________________________
function ascDesNone(array, mode){
    switch (mode) {
        case "Des":
            return array.sort((a, b)=> b - a);
        case "Asc":
        case "None":
            return array.sort();
        default:
            return NaN;
    }
}
console.log(`${++i}. ${ascDesNone.name}([4, 3, 2, 1], "Asc") -> ${ascDesNone([4, 3, 2, 1], "Asc")}`)


//_____________(10)_____________________________________________________________________________________________________
function sortIt(arr) {
    return arr.sort((a, b) => {
        let num1 = typeof a === "number" ? a : a[0];
        let num2 = typeof b === "number" ? b : b[0];
        return num1 - num2;
    });
}
console.log(`${++i}. sortIt([4, [56], 1, 3])->`);
console.log(...sortIt([4, [56], 1, 3]));
//тут я не знаю як це можна автоматизувати як string, щоб код нормально виглядав і принципі не було якось кастильно
//_____________(11)_____________________________________________________________________________________________________
function hasHiddenFee(arrayOfPrices, total){
    arrayOfPrices=arrayOfPrices.map(item=>Number(item.slice(1)));
    total=Number(total.slice(1));
    return arrayOfPrices.reduce((previousValue, currentValue) => previousValue + currentValue, null) < Number(total);
    //щодо reduce я справді скопіпастив, проте для себе все таки розібрався як він працює
}

console.log(`${++i}. ${hasHiddenFee.name}(["$1", "$2", "$3"], "$6") -> ${hasHiddenFee(["$1", "$2", "$3"], "$6")}`)

//_____________(12)_____________________________________________________________________________________________________
function trace(array){
    let sum=0;
    for(let i=0; i<array.length;i++) sum+=array[i][i];
    return sum;
}

Print(++i, [[1, 4],[4, 1]],trace);

//_____________(13)_____________________________________________________________________________________________________
function removeSpecialCharacters(str){
    return  str.replace(/[!@#$%^&*()|.\\]/gi, '');
}
Print(++i, "%fd76$fd(-)6GvKlO.", removeSpecialCharacters);


//_____________(14)_____________________________________________________________________________________________________
function mathExpr(str) {
    const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    return  re.test(str)
}
Print(++i, "4*6",mathExpr);

//_____________(15)_____________________________________________________________________________________________________
function pentagonal(n){
    if(n>0){
        return (5*Math.pow(n, 2)-5*n+2)/2;
    }
    return NaN;
}
Print(++i,8, pentagonal);


//_____________(16)_____________________________________________________________________________________________________
function tempConversion(temp){
    let F=temp*9/5+32;
    let K=temp+273.15;
    return [F, K];
}
Print(++i, 300.4, tempConversion);

//_____________(17)_____________________________________________________________________________________________________
function missingLetter(str) {
    if (typeof str==="string") {
        let i, j = 0;
        const m = 122;
        i = str.charCodeAt(0);
        while (i <= m && j < str.length) {
            if (String.fromCharCode(i) !== str.charAt(j)) {
                return String.fromCharCode(i);
            }
            i++;
            j++;
        }
        return "No Missing Letter";
    }
    return "The passed argument is not a string!";
}
Print(++i, "ghijklmno",  missingLetter);
