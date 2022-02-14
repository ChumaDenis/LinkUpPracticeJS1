let i=0;
function Print(n, arguments, func){
    console.log(`${n}. ${func.name}(${arguments}) -> ${func(arguments)}`)
}


//____________(1)_______________________________________________________________________________________________________
function countTrue(array){
    let count=0;
    for(let i of array)
    {
        if(i===true){count++;}
    }
    return count;
}
Print(++i, [false, true,false], countTrue);


//____________(2)_______________________________________________________________________________________________________
function jazzify(array){
    let tempArray= [];
    for(let i of array){
        if(i[i.length-1]!=="7")
            tempArray.push(i+"7");
        else
            tempArray.push(i);
    }
    return tempArray;
}
Print(++i, ["Dm", "G7", "E", "A"], jazzify);

//____________(3)_______________________________________________________________________________________________________
function sortDescending(num){
    if(typeof num ==='number' && (num>0)){
        let firstNum=num;
        let tempArray=[];
        for(let i of num.toString()){
            tempArray.push(Number(i));
        }
        tempArray.sort();
        num=0;
        let n=0;
        for(let i of tempArray)
            num += i * Math.pow(10, n++);

        return `(${firstNum}) -> ${num}`;
    }
}
Print(++i, 1254859723, sortDescending);

//____________(4)_______________________________________________________________________________________________________
function sortByLength(array){
    return `(${array}) -> ${array.sort(function(a, b){return a.length - b.length;})}`;
}
Print(++i, ["Leonardo", "Michelangelo", "Raphael", "Donatello"], sortByLength);

//____________(5)_______________________________________________________________________________________________________
function minMax(array){
    let min=Math.min(...array), max=Math.max(...array);
    return [min, max];
}
Print(++i, [1, 2, 3, 4, 5], minMax);

//_____________(6)______________________________________________________________________________________________________
function findLargestNums(array){
    let tempArray=[];
    for(let i of array){
        tempArray.push(Math.max(...i));
    }
    return tempArray;
}
Print(++i, [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]], findLargestNums);

//_____________(7)______________________________________________________________________________________________________
class Calculator{
    constructor() {}
    check(a, b){
        if(typeof a === 'number' && typeof b==='number'){
            return true;
        }
        else false;
    }

    add(a, b){
        if(this.check(a, b)){
            return a+b;
        }
        else return NaN;
    }
    subtract(a, b){
        if(this.check(a, b)){
            return a-b;
        }
        else return NaN;
    }
    multiply(a, b){
        if(this.check(a, b)){
            return a*b;
        }
        else return NaN;
    }
    divide(a, b){
        if(this.check(a, b)&& b!==0){
            return a/b;
        }
        else return NaN;
    }
}
let calculator = new Calculator()
console.log(`${++i}. ${calculator.multiply.name}(5,10) -> ${calculator.multiply(5, 10)}`)

//_____________(8)______________________________________________________________________________________________________
function keysAndValues(array){
    let keys = Object.keys(array),
        values = keys.map(function (key) {
            return array[key];
        });

    return [keys, values];
}
Print(++i, { key1: true, key2: false, key3: undefined }, keysAndValues);

//_____________(9)______________________________________________________________________________________________________
function ascDesNone(array, mode){
    if (mode!=="None"){
        let modeFunc;
        if(mode==="Asc") modeFunc=function(a, b){return a - b;}
        else if(mode==="Des") modeFunc=function(a, b){return  b - a;}
        else return NaN;
        return array.sort(modeFunc);
    }
    return array.sort();
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

Print(++i, [4, 1, 3], sortIt);
//_____________(11)_____________________________________________________________________________________________________
function hasHiddenFee(arrayOfPrices, total){
    let array=[];
    for(let i of arrayOfPrices){
        let price="";
        for(let j of i) if(j!=="$")  price+=j;
        array.push(Number(price));
    }
    let totalPrice="";
    for(let j of total) if(j!=="$")  totalPrice+=j;

    if(array.reduce((previousValue, currentValue) => previousValue + currentValue, null)<Number(totalPrice)) return true;
    else return false;
}
hasHiddenFee(["$1", "$2", "$3"], "$6")
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
    let stringToReplace= str.replace(/[!@#$%^&*()|.\\]/gi, '');
    return stringToReplace;
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
    else return NaN;
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
    let i, j = 0, m = 122;
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
Print(++i, "tuvxyz",missingLetter);
