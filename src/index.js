module.exports = function multiply(first, second) {
  // your solution

  let firstArray = [];
  let secondArray = [];
  let multiplyArray = [];
  let resultArray = [];
  let result = '0';

  strToNumberArray(first,firstArray);
  strToNumberArray(second,secondArray);
  
  for (let i=0; i<second.length; i++){
    multiplyArrayByDigit(firstArray,secondArray[i], multiplyArray,i);
    sumArraysByDigit(resultArray,multiplyArray);
    result = numberArrayToStr(resultArray);
  }
  result = numberArrayToStr(resultArray);
  return result;
}


/* numArray in reverse order */
function strToNumberArray(strInput, resultArray) {
  resultArray.length = 0;
  for (let i = strInput.length-1; i >=0 ; i--) {
    resultArray.push(Number(strInput[i]));
  }
}

function numberArrayToStr(numberArray) {
  let result = '';
  for (let i = numberArray.length-1; i>= 0; i--) {
    result += String(numberArray[i]);
  }
  return result;
}

/* numArray in reverse order */
function multiplyArrayByDigit(numArray,digit, multiplyResultArray, shift=0) {
  multiplyResultArray.length = 0;
  for (let i = 0; i < shift; i++){
    multiplyResultArray.push(0);
  }
  let overflow = 0;
  let tmpResult = 0;
  for (let i = 0; i < numArray.length; i++) {
    tmpResult = numArray[i] * digit + overflow;
    multiplyResultArray.push(tmpResult % 10);
    overflow = Math.floor(tmpResult / 10);
  }
  if (overflow != 0) {
    multiplyResultArray.push(overflow);
  }
}

function sumArraysByDigit(sumArray,additionArray) {
  let maxLength = Math.max(sumArray.length, additionArray.length);
  let tmpResult = 0;
  let overflow = 0;
  for (let i = 0; i < maxLength; i++) {
    if(sumArray[i] === undefined){
      sumArray[i] = 0;
    }
    if(additionArray[i] === undefined){
      additionArray[i] = 0;
    }
    tmpResult = sumArray[i] + additionArray[i] + overflow;
    sumArray[i] = tmpResult % 10;
    overflow = Math.floor(tmpResult / 10);
  }
  if (overflow != 0) {
    sumArray.push(overflow);
  }
}