function find_average(array) {
    return array.reduce( ( prev, cur ) => prev + cur ) / array.length;
  }