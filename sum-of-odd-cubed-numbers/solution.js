function cubeOdd(arr) {
    if(arr === []){
    return undefined
    }
    var filtered = arr.filter(item => parseInt(item) == item);
    if(filtered.length != arr.length){
    return undefined
    }
    var cube =  arr.map(x => Math.pow(x, 3)) 
    var odd = cube.filter(n => n%2)
    return odd.reduce((acc,cur) => acc + cur)
    
    }