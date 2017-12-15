function capitalize(s){
    var first = s.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
    var second = s.split('').map((v,i) => i % 2 ? v.toUpperCase(): v.toLowerCase()).join('');
      return [first, second];
    };