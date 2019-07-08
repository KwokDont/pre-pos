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
    }else if(flagChar != v.charAt(0)){
      if(num !=0){
        var ob = {name:flagChar, summary:num};
        returnArr.push(ob);
      }
      if(v.indexOf("-") > 0 || v.indexOf(":") > 0 || v.indexOf("[") > 0){
        var index = 0;
        var endIndex = 0;
        if(v.indexOf("-") > 0){
          index = v.indexOf("-")+1;
          endIndex = v.length;
        }else if(v.indexOf(":") > 0){
          index = v.indexOf(":")+1;
          endIndex = v.length;
        }else{
          index = v.indexOf("[")+1;
          endIndex = v.indexOf("]");
        }
        num = Number(v.substring(index,endIndex));
        var ob = {name:v.charAt(0), summary:num};
        returnArr.push(ob);
        num = 0;
      }else{
        flagChar = v;
        num = 1;
      }
    }else{
      if(v.indexOf("-") > 0||v.indexOf(":") > 0||v.indexOf("[") > 0){
        if(v.indexOf("-") > 0){
          index = v.indexOf("-")+1;
          endIndex = v.length;
        }else if(v.indexOf(":") > 0){
          index = v.indexOf(":")+1;
          endIndex = v.length;
        }else{
          index = v.indexOf("[")+1;
          endIndex = v.indexOf("]");
        }
        num += Number(v.substring(index,endIndex));
      }else{
        num++;
      }
    }
  });
  return returnArr;
}
