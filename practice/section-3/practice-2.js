'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(v=> {
    for(var i = 0 ; i < objectB['value'].length ; i++){
      if(v['key'] == objectB['value'][i]){
        v['count'] = v['count']-Math.floor(v['count']/3);
      }
    }
  });
  return collectionA;
}
