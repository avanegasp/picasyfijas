//
//
//
//
// $(document).ready(function(){
//   var number = 999 + Math.floor(Math.random() * 9000);
//   console.log(number)
//
//
//     $('input').keyup(function(e){
//
//     var value = $('input').val()
//     console.log(value)
//
//     var checkNumber = isNaN(value)
//     console.log("no es un número")
//
//     var differentLength = value >= 4
//
//     var checkRepeat = value.split("")
//     // console.log("se repiten números")
//
//     if(e.keyCode==13){
//       value
//       $('.table').append(function(){
//              return "<td>"  + value +"";
//        });
//              $(this).val('');
//     }
//
//    if (value === number){
//     console.log(value)
//     console.log('Son los mismos números')
//     }if (value.length >= 4){
//       alert("tiene más de 4 caracteres")
//     }
//   })
// })


$('document').ready(function(){

  $('input').keyup(function(e){
    var value = $('input').val()
    console.log(value)


    if (e.keyCode === 13){
      value
    }

    repeatNumber = value.split('')
    console.log(repeatNumber)


    var result = []

    for(var i=0; i < repeatNumber.length; i++){
      repeatNumber[i] = repeatNumber.push(repeatNum
    }
    result
    console.log(result)
  })

})


//
// var num = 123456;
// var digits = num.toString().split('');
// console.log(digits);
