function validatePIN (pin) {
    var valid = /^([0-9]{4}|[0-9]{6})$/g;
    if(!valid.test(pin)){
    return false;
    }else {
    return true;
    }
  }