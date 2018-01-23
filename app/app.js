function validation(){

  repeatNumber = value.split('')

  for(var i=0; i < repeatNumber.length; i++){
    var repeat = repeatNumber.indexOf( repeatNumber[i] ,  i+1)
    if (repeat != -1){
      console.log("el numero " + repeatNumber[i] + " esta repetido ")
    }else{
      $('.table').append(function(){
        return "<td>"  + value +"";
      });
      $(this).val('');
    }
  }
}


$(document).ready(function(){
  var number = 999 + Math.floor(Math.random() * 9000);
  console.log(number)

    $('input').keyup(function(e){

      if(e.keyCode==13){

        var value = $('input').val()
        console.log(value)

        var checkNumber = isNaN(value)
        console.log("no es un número")

        var differentLength = value != 4

  // no repeat number in input
        var validation = function(){

        }

      }
    })
  })





















































// // logic game
//
// function game (player, machine){
//   var fijas = 0
//   var picas = 0
//
//   for(var i = 0; i < player.length; i++){
//     if(player[i] === machine[i]){
//       fijas += 1
//     }
//   }
//
//   for (var i = 0; i < player.length; i++) {
//   if (target.indexOf(machine[i]) > -1 && machine[i] !== player[i]) {
//     picas +=1
//     }
//   }
//
//   if(fijas === 4) {
//   $.confirm({
//   title: 'Ganaste!',
//   content: 'Quieres jugar de nuevo?',
//   buttons: {
//       confirm: reset,
//       cancel: function () {
//         //Do nothing
//       },
//     }
//   });
// }
//
//   return [picas, fijas]
//   }
//
//
//
//
//
//
//   $("document").ready(function(){
//   startGame();
//   });
//
//
//   var startGame = function() {
//   "aqui todo lo de crear el numero aleatorio"
//
//   validateNumber(number);
//   }
//
//   var validateNumber = function(number) {
//   array = number.split("")
//   for(var i=0; i < array.length; i++){
//   var repeat = array.indexOf( array[i] ,  i+1)
//
//      if (repeat != -1){
//        console.log("el numero " + array[i] + "esta repetido ")
//      }
//   }
//   }
//   }
