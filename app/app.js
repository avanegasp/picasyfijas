// function validation(){
//
//   if(e.keyCode==13){
//     value
//   }
//
//   repeatNumber = value.split('')
//
//   for(var i=0; i < repeatNumber.length; i++){
//     var repeat = repeatNumber.indexOf( repeatNumber[i] ,  i+1)
//     if (repeat != -1){
//       console.log("el numero " + repeatNumber[i] + " esta repetido ")
//     }else{
//       $('.table').append(function(){
//         return "<td>"  + value +"";
//       });
//       $(this).val('');
//     }
//   }
// }


$(document).ready(function(){
  var number = 999 + Math.floor(Math.random() * 9000);
  console.log(number)


    $('input').keyup(function(e){

    var value = $('input').val()
    console.log(value)

    var checkNumber = isNaN(value)
    console.log("no es un número")

    var differentLength = value >= 4

    // var validation = function(value){
      if(e.keyCode==13){
        value
        $('.table').append(function(){
          return "<td>"  + value +"";
        });
        $(this).val('');
      }
    // }
    console.log("se repiten números")


   if (value === number){
    console.log(value)
    console.log('Son los mismos números')
    }if (value.length >= 4){
      alert("tiene más de 4 caracteres")
    }
  })
})




// $('document').ready(function(){
//
//   $('input').keyup(function(e){
//     var value = $('input').val()
//     console.log(value)
//
//     if (e.keyCode === 13){
//       value
//     }
//     var validation = function(){}
//   })
// })
//
//
// //
// // var num = 123456;
// // var digits = num.toString().split('');
// // console.log(digits);
