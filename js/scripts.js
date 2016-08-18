//business interface

var iArray = [];

var onesPlaceConverter = function(input) {
  for (var i = 0; i < input; i++) {
   if (input <= 3) {
     iArray.push("I");
   } else if (input === 4) {
      iArray.push("IV");
      break;
    } else if (input >= 5 && input <= 8) {
    iArray.push("V");
    var inMath = input - 5;
      for (var j = 0; j < inMath; j++) {
          iArray.push("I");
        } break;
    } else if (input === 9) {
      iArray.push("IX");
      break;
    }
  }
}

var tensPlaceConverter = function(input) {
  for (var i = 0; i < input; i++) {
   if (input <= 3) {
     iArray.push("X");
   } else if (input === 4) {
     iArray.push("XL");
     break;
   } else if (input >= 5 && input <= 8) {
    iArray.push("L");
    var inMath = input - 5;
      for (var j = 0; j < inMath; j++) {
          iArray.push("X");
        } break;
    } else if (input === 9) {
      iArray.push("XC");
      break;
    }
  }
}

var hundredsPlaceConverter = function(input) {
  for (var i = 0; i < input; i++) {
   if (input <= 3) {
     iArray.push("C");
   } else if (input === 4) {
     iArray.push("CD");
     break;
   } else if (input >= 5 && input <= 8) {
    iArray.push("D");
    var inMath = input - 5;
      for (var j = 0; j < inMath; j++) {
          iArray.push("C");
        } break;
    } else if (input === 9) {
      iArray.push("DM");
      break;
    }
  }
}

var thousandsPlaceConverter = function(input) {
  for (var i = 0; i < input; i++) {
    iArray.push("M");
  }
}

//user interface logic
$(document).ready(function(){
  $("form.form-group").submit(function(event){
    event.preventDefault();
    iArray.length = 0;
    var numberInputString = $("input#number").val();

    var onesPlace = parseInt(numberInputString.slice(-1));
    var tensPlace = parseInt(numberInputString.slice(-2,-1));
    var hundredsPlace = parseInt(numberInputString.slice(-3,-2));
    var thousandsPlace = parseInt(numberInputString.slice(-4,-3));

    thousandsPlaceConverter(thousandsPlace) + hundredsPlaceConverter(hundredsPlace) + tensPlaceConverter(tensPlace) + onesPlaceConverter(onesPlace);

    $("#output").text(iArray.join(""));
  });
});
