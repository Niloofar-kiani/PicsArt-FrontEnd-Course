//Special Arrays
function isSpecialArray(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== i % 2) return false;
  }
  return true;
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) //true
console.log(isSpecialArray([1, 7, 4, 9, 6, 1, 6, 3])) //false



//Check if All Values Are True
function allTruthy(arr) {
  return arr.every(Boolean);
}
console.log(allTruthy([true, true , true])); // false
console.log(allTruthy([true, false, true])); // false
console.log(allTruthy([5, 4, 3, 2, 1, 0])); // true



//Check if All Values Are True 2 
//There is a problem in my code and I can't solve it.
//only returns false if first argument is false.
function checkInput() {
  let checking = false;
  for (let index = 0; index < arguments.length; index++) {
    checking = Boolean(arguments[i]);
    if(!checking) break; 
  }
  console.log(checking);
}
checkInput(true,true,true);
checkInput(true,false,true);
checkInput(5, 4, 3, 2, 1, 0);



//Find the Mean of All Digits
function mean (num) {
  let newArray = [];
  let numString = num.toString();
  for (i = 0; i < numString.length; i += 1) {
    newArray.push(+numString.charAt(i));
  }
  var total = 0;
  for(var i in newArray) { 
      total += newArray[i];
  }
  let average = total / newArray.length;
  return average;
}

console.log(mean(42));
console.log(mean(12345));
console.log(mean(666));
