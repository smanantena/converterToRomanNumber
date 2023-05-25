function convertToRoman(num) {
    return convertGreatThanThousand(num);
}

function convertGreatThanThousand(num) {
    let result = "";
    if(1 <= num && num < 1000) {
        result += convertLessThanThousand(num);
    } else if(1000 <= num && num < 10000) {
        result += "M";
        if(0 < num - 1000) {
            if(Math.trunc((num - 1000)/1000) > 0) {
                for(let i = 1; i <= Math.trunc((num - 1000)/1000) ; i++) {
                    result += "M";
                }
            }
            if(num - 1000 - (Math.trunc((num - 1000)/1000)*1000) > 0) {
                result += convertLessThanThousand(num - 1000 - (Math.trunc((num - 1000)/1000)*1000));
            }
        }
    }
    return result;
}

function convertLessThanThousand(num){
    let result = "";
    if(1 <= num && num < 900) {
        result += convertLessThanNineHundred(num);
    } else if(900 <= num && num < 1000) {
        result += "CM";
        if(num - 900 > 0) {
            result += convertLessThanHundred(num - 900);
        }
    }
    return result;
}

   function convertLessThanNineHundred(num) {
    let result = "";
    if(1 <= num && num <= 499) {
        result += convertLessThanFiveHundred(num);
    } else if(500 <= num && num < 900) {
        result += "D";
        if(500 < num) {
            result += convertLessThanFiveHundred(num - 500);
        }
    }
    return result;
   }

   function convertLessThanFiveHundred(num) {
    let result = "";
    if(1 <= num && num < 400) {
        result += convertLessThanFourHundred(num);
    } else if(400 <= num && num <= 499) {
        result += "CD";
        if(num - 400 > 0) {
            result += convertLessThanHundred(num - 400);
        }
    }
    return result;
   }
   
   function convertLessThanFourHundred(num) {
     let result = "";
     if(1 <= num && num < 100) {
        result +=convertLessThanHundred(num);
     } else if(100 <= num) {
        if(100 <= num && num < 400) {
            result = "C";
            if(num - 100 >= 100) {
              for(let i = 1; i <= Math.trunc((num - 100) / 100) ; i++) {
                result += "C";
              }
            }
            if(num - 100 - (Math.trunc((num - 100) / 100) * 100) > 0) {
              result += convertLessThanHundred(num - 100 - (Math.trunc((num - 100) / 100) * 100));
            } 
          }
     }
     
     return result;
   }
   
   function convertLessThanHundred(num) {
     let result = "";
     if(1 <= num && num < 90) {
        result += convertLessThanNinety(num);
     } else if(90 <= num && num < 100) {
        result += "XC";
        if(90 < num) {
            result += convertLessThanTen(num - 90);
        }
     }
     return result;
   }
   
   function convertLessThanNinety(num) {
     let result = "";
    if(1 <= num && num <= 49) {
        result += convertLessThanFifthy(num);
    } else if(50 <= num && num < 90) {
        result = "L";
       for(let i = 1; i <= Math.trunc((num - 50) / 10); i++) {
         result += "X";
       }
       if(num - 50 -(Math.trunc((num - 50)/10) * 10) != 0) {
         result += convertLessThanTen(num - 50 -(Math.trunc((num - 50)/10) * 10));
       }
     }
     return result;
   }
   
   function convertLessThanFifthy(num) {
     let result = "";
     if(1 <= num && num <= 10) {
       result = convertLessThanTen(num);
     } else if (10 < num && num < 40) {
       if(num % 10 == 0) {
         result = multiplesOfTen(num);
       } else {
         result = multiplesOfTen(Math.trunc(num/10) * 10);
         result += convertLessThanTen(num - Math.trunc(num/10) * 10);
       }
     } else if (40 <= num && num <= 49) {
       result = "XL";
       result += convertLessThanTen(num - 40);
     }
     return result;
   }
   
   function multiplesOfTen(num) {
     let result = "";
     if(num % 10 == 0) {
         for(let i = 1 ; i <= num / 10 ; i++) {
           result += "X";
         }
       }
     return result;
   }
   
   function convertLessThanTen(num) {
     let result = "";
     if(num == 1) {
       result = "I";
     } else if(1 < num && num < 5) {
       if(num == 5 - 1) {
         result = "IV";
       } else {
         for(let i = 1 ; i <= num ; i++) {
           result +="I";
         }
       }
       
     } else if(num == 5) {
       result = "V";
     } else if(5 < num && num < 10) {
       if(num == 10 - 1) {
         result = "X";
         result = "I".concat(result);
       } else {
         result = "V";
         for(let i = 6 ; i <= num ; i++) {
           result += "I";
         }
       }
     } else if(num == 10) {
       result = "X";
     }
     
     return result;
   }
   
   
/* for(let i = 1 ; i < 10000 ; i++) {
     let result = "";
     result += convertToRoman(i);
     console.log(i," -> " ,result);
   }
*/
   //console.log(convertLessThanNinety(51));
   console.log(convertToRoman(36));