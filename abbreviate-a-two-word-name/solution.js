function abbrevName(name){
  var letters = name.match(/\b(\w)/g);
  var abbreviate = letters[0].toUpperCase() + '.' + letters[1].toUpperCase();
  return abbreviate;
}
