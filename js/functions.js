function testString(string,stringLength){
  string.length<=stringLength?  testResult=true : testResult=false;
  return testResult
}

function testPolindrom(str){
  str=str.toLowerCase().replaceAll(' ','');
  let reversStr=str.split('').reverse().join('');
  str===reversStr? testResult=true : testResult=false;
  return testResult
}
