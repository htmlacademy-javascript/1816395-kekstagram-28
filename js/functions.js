function getTestString(string, stringLength) {
  return string.length >= stringLength;
}

function getTestPolindrom(str) {
  str = str.toLowerCase().replaceAll(' ', '');
  const reversStr = str.split('').reverse().join('');
  return str === reversStr;
}

function getCutNumber(data) {
  data = String(data).split('');
  const NumberArrey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const CutNumberResult = [];
  for (let i = 0; i < data.length; i++) {
    if (NumberArrey.includes(Number(data[i]))) {
      CutNumberResult.push(data[i]);
    }
  }
  return Number(CutNumberResult.join(''));
}

// function getAddStr (str,minLength,addStr){
//   if (str.length < minLength){
//     let resultAddStr = '';
//     if(addStr.length >= minLength){
//       resultAddStr = addStr.slice(0,minLength - str.length) + str;
//       return resultAddStr;
//     } else {
//       let indexOfAddStr = 0;
//       for (let i = 0 ; i < minLength - str.length; i++){
//         if (addStr[indexOfAddStr] === undefined){
//           indexOfAddStr = 0;
//         }
//         resultAddStr = resultAddStr + addStr[indexOfAddStr];
//         indexOfAddStr++;
//       }
//       resultAddStr = resultAddStr + str;
//       return resultAddStr;
//     }
//   } else {
//     return str;
//   }
// }

function getAddStr(str, minLength, addStr) {
  if (str.length < minLength) {
    let resultAddStr = '';
    if (addStr.length >= minLength) {
      resultAddStr = addStr.slice(0, minLength - str.length) + str;
      return resultAddStr;
    } else {
      while (resultAddStr.length < minLength - str.length) {
        resultAddStr = addStr + resultAddStr;
        if (minLength - resultAddStr.length <= addStr.length) {
          break;
        }
      }
      const lineFill = (minLength - (resultAddStr.length + str.length));
      if (lineFill !== 0) {
        const lastPartResult = (minLength - str.length) % addStr.length;
        resultAddStr = addStr.slice(0, lastPartResult) + resultAddStr;
      }
      resultAddStr = resultAddStr + str;
      return resultAddStr;
    }
  } else {
    return str;
  }
}

//  про соблюдение критериев страшно даже подумать...Т_Т
getTestString('test', 5);
getTestPolindrom('test');
getCutNumber('test');
getAddStr('test');

