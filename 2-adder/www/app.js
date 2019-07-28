
function Add(){
    var firstnumber = document.getElementById('firstnumber').value;
    var secondnumber = document.getElementById('secondnumber').value;
  
    var firstint = parseFloat(firstnumber);
    var secondint = parseFloat(secondnumber);
  
    var add = firstint + secondint;
  
    // ons.notification.alert('Added ' + add);
    ons.notification.toast('Added ' + add, { timeout: 2000 });
  }
  
  function Clearall() {
    firstnumber = document.getElementById('firstnumber').value = '';
    secondnumber = document.getElementById('secondnumber').value = '';
  }