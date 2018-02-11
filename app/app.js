var myArray = [1,2,3,4,5,6,7,8,9,0]

shuffle = function(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var numRandom = shuffle(myArray).slice(0,4).toString().replace(/,/g, '');

console.log ("este es mi número random " + numRandom)


    $('input').keyup(function(e){

        if(e.keyCode===13){

        var value = $('input').val()

        var checkNumber = isNaN(value)

        var differentLength = value.length != 4

        var checkRepeat = value.split("").some(function(v,i,a){
           return a.lastIndexOf(v)!=i;
         });

         // Set validation function
   function validate(){
     return checkNumber || differentLength || checkRepeat
   }

   function clean() {
     $('table').val('');
     $('table').focus();
   }
   // If validations don't pass add has-error class
   if(validate()) {
     $(".user").addClass("has-error")
     $("p").css("color", "red")
   }

   // Else remove has-error class and invoke calculation function
   else {
     $(".user").removeClass("has-error")
     $("p").css("color", "navy")
     comparation = calculation(numRandom, value)

     // Append result returned by calculation function
     $("table").append('<tr><td>' + value + '</td><td>' + comparation[0] + '</td><td>' + comparation[1] + '</td></tr>')
     clean()
   }
 }
})
      function calculation(entra, sale){
        var picas = 0
        var fijas = 0

        for(var i = 0; i < entra.length; i++){
          if (entra[i] === sale[i]){
            fijas += 1
          }
        }
        for (var i = 0; i < entra.length; i++) {
          if (entra.indexOf(sale[i]) > -1 && sale[i] !== entra[i]) {
            picas +=1
          }
        }
        if(fijas === 4) {
          wonPlay()
          won=1;
          // alert("entro!")
        }

        return [picas, fijas]
      }

    //javascript
    js_won = null;

    //jquery
    $(function() {
            function jq_won() {
                $('.result.won').show();
             }
            js_won = jq_won;
     })

     //just js
     function wonPlay() {
           js_won(); //== call jquery function - just Reference is globally defined not function itself
    }


    $('.play').on('click', function(){
      window.location = "https://avanegasp.github.io/rompecabezas1/";
    })
