



$('body').keyup(function(e){
  event.preventDefault();
  var number = 999 + Math.floor(Math.random() * 9000);
  console.log(number)
  var value = $('input').val()
  if(e.keyCode==13){
    value

    // console.log(value)

    $('.table').append(function(){
           return "<td>"  + value +"";
     });
           $(this).val('');
  }
  if (value.length >= 4){
    alert("tiene más de 4 caracteres")
  }
  // if(value === number){
  //   console.log("números iguales")
  // }else{
  //   alert("no son iguales")
  // }

})
