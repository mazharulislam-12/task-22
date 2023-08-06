function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 !== 0 || year % 400 === 0) {
        return true; // Leap year
      } else {
        return false; // Not a leap year
      }
    } else {
      return false; // Not a leap year
    }
  }

console.log(isLeapYear(2021));
console.log(isLeapYear(1989));


// 01. practice------------
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0 ||  year % 400 === 0) {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
} 
console.log(isLeapYear(2305));


// 02. practice 
function isLeapYear(year){
    if (year % 4 == 0) {
        if (year % 100 !== 0 || year % 400 === 0) {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}
console.log(isLeapYear(2010));
console.log(isLeapYear(1894));
