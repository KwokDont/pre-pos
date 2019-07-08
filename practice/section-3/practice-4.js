'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var flagChar = '';
  var num = 0;
  var collectionC = new Array();
  var length = collectionA.length;
  collectionA.forEach(v=>{
    if(flagChar == ''){
      flagChar = v;
      num++;
    }else if(flagChar != v){
      var ob = {key:flagChar, count:num};
      collectionC.push(ob);
      if(v.indexOf("-") > 0){
        var split = v.split("-");
        var ob = {key:split[0], count:Number(split[1])};
        collectionC.push(ob);
      }
      flagChar = v;
      num = 1;
    } else{
      num++;
      if(collectionA.indexOf(v)+num == length){
        var ob = {key:flagChar, count:num};
        collectionC.push(ob);
      }
    }
  });
  collectionC.forEach(v=> {
    for(var i = 0 ; i < objectB['value'].length ; i++){
      if(v['key'] == objectB['value'][i]){
        v['count'] = v['count']-Math.floor(v['count']/3);
      }
    }
  });
  return collectionC;
}
