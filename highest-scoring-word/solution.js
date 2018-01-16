function high(x){
    return (x.split(" ")[x.split(" ").map(y => y.split('').reduce((acc, letter) => acc + (parseInt(letter, 36) - 9), 0)).indexOf(Math.max.apply( null, x.split(" ").map(y => y.split('').reduce((acc, letter) => acc + (parseInt(letter, 36) - 9), 0)) ))]);
    }