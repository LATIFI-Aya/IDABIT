function filterArray(arr) {
	let result = [];
    for(let i=0; i< arr.length; i++){
        if(typeof arr[i] == 'number'){
            result.push(arr[i]);
        }
    }
    return result;
}

function isSymmetrical(num) {
    let str = num.toString();
    let i = 0; 
    let j = str.length - 1;
	while (i < j) {
        if (str[i] !== str[j]) {
            return false;
             }
             i++;
             j--;
    }
    return true;
 }

 function countTrue(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }

    return count;
}

function objectToArray(obj) {
    let result = [];
    for (let key in obj) {
        result.push(key, obj[key])
        }
        return result;
        }
function squareDigits(n){
    let squares= n.tostring();
    let result ='';
    for (let i =0; i < squareslength ; i++){
    let digit= parseInt(squares[i]);
    resultat += digit * digit;
    }
    return number (result);
}


function countTrue(arr) {
    let trueCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            trueCount++;
        }
    }
    return trueCount;
}
function arrayOfMultiples(num, length) {
    let multiples = [];
    for (let i = 1; i <= length; i++) {
        multiples.push(num * i);
  }
    return multiples;
}

function isSpecialArray(arr) {
	let sum = 0;
    let i = 0;
    while (i < arr.length){
        sum += arr[i];
        i++; 
    }
    if (sum > arr.length) {
        return true;
    }
    return false;
}
