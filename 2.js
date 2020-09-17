function phonenumber(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputtxt.value.match(phoneno)) {
      return true;
    }
    else {
      alert("message");
      return false;
    }
  }

console.log(phonenumber('123-123-123'))
console.log(phonenumber('123 123 123'))
console.log(phonenumber('123-123-1234'))
console.log(phonenumber('123 123 123'))

