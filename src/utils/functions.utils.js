function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 96 && code < 123) && 
          code!==32) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

  export {  isAlphaNumeric  }