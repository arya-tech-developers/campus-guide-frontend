

// const str = "Deepanshu Saini"
// console.log(isAlphaNumeric(str));


function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if(!((code>64&&code<=91)||(code>96&&code<123)||(code===32)))
        return true;
    }
    return false;
  };

  export {  isAlphaNumeric  }