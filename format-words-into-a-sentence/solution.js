
function formatWords(words){
    var newStr = "";
    if(words){
    for(var i = words.length - 1; i >= 0; i--) {
      if(words[i] === '') {
         words.splice(i, 1);
      }
  }
      if (words.length === 1) {
          newStr = words[0];
      } else if (words.length === 2) {
          newStr = words.join(' and ');
      } else if (words.length > 2) {
          newStr = words.slice(0, -1).join(', ') + ' and ' + words.slice(-1);
      }
      console.log(newStr)
      return newStr;
      }else {
      newStr =''
      return newStr;
      }
  }