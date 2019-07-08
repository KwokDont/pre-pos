'use strict';

function countSameElements(collection) {
  var flagChar = '';
  var num = 0;
  var returnArr = new Array();
  var length = collection.length;
  collection.forEach(v=>{
    if(flagChar == ''){
      flagChar = v;
      num++;
    }else if(flagChar != v){
      var ob = {key:flagChar, count:num};
      returnArr.push(ob);
      flagChar = v;
      num = 1;
    }else{
      num++;
      if(collection.indexOf(v)+num == length){
        var ob = {key:flagChar, count:num};
        returnArr.push(ob);
      }
    }
  });
  return returnArr;
}
