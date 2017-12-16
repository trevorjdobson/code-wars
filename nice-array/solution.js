function isNice(arr){
    if(arr === []){
      return false;
      }
      for(let i = 0; i < arr.length; i++){
        var low = arr[i] - 1;
        var high = arr[i] + 1;
        if((arr.indexOf(low) === -1) && (arr.indexOf(high) === -1)){
        return false;
      }
    }
    return true;
    }