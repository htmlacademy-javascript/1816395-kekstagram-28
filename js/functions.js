function testString(string,stringLength){
  string.length <= stringLength ? testResult = true : testResult = false;
  return testResult;
}

function testPolindrom(str){
  str = str.toLowerCase().replaceAll(' ','');
  const reversStr = str.split('').reverse().join('');
  str === reversStr ? testResult = true : testResult = false;
  return testResult;
}

function cutNumber(data){
  data = String(data).split('');
  const numberArrey = [0,1,2,3,4,5,6,7,8,9];
  const cutNumberResult = [];
  for (let i = 0; i < data.length;i++){
    if (numberArrey.includes(Number(data[i]))){
      cutNumberResult.push(data[i]);
    }

  }
  return Number(cutNumberResult.join(''));
}
