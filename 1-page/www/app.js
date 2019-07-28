function sayHello() {
  var myname = document.getElementById('myname').value;

  ons.notification.alert('Hello ' + myname);
  ons.notification.toast('Hello ' + myname, { timeout: 2000 });
}

function Clear() {
  myname = document.getElementById('myname').value = '';
}

