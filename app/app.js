



$(document).ready(function(){
  var number = 999 + Math.floor(Math.random() * 9000);
  console.log(number)
  $('input').keyup(function(e){
    event.preventDefault();
    var value = $('input').val()
    console.log(value)
    if(e.keyCode==13){
      value
      $('.table').append(function(){
             return "<td>"  + value +"";
       });
             $(this).val('');
    }
     if (value.length >= 4){
      alert("tiene más de 4 caracteres")
    } if (value === number){
      console.log(value)
      console.log('Son los mismos números')
    }
    // if(value === number){
    //   console.log("números iguales")
    // }else{
    //   alert("no son iguales")
    // }

  })
})
