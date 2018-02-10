var myArray = [1,2,3,4,5,6,7,8,9,0]

shuffle = function(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var numRandom = shuffle(myArray).slice(0,4).toString().replace(/,/g, '');

console.log (numRandom)

$(document).ready(function(){

    $('input').keyup(function(e){

        if(e.keyCode==13){

        var value = $('input').val()

        var checkNumber = isNaN(value)

        var differentLength = value != 4

        var repeat = function(){
          repeatNumber = value.split('')
          console.log(repeatNumber)

          for(var i=0; i < repeatNumber.length; i++){
            var repeat = repeatNumber.indexOf( repeatNumber[i] ,  i+1)
            if (repeat != -1){
              console.log("el numero " + repeatNumber[i] + " esta repetido ")
            }
          }
        }

        function validationNumber(){
          return checkNumber || differentLength || repeat
        }

        if(validationNumber()) {
          $(".user").addClass("has-error")
          $("p").css("color", "red")
        }else{
          $(".user").removeClass("has-error")
            number = calculation(numRandom, value)
            $("table tr:first").after('<tr><td>' + value + '</td><td>' + number[0] + '</td><td>' + number[1] + '</td></tr>')
        }
      }
    })
  })
