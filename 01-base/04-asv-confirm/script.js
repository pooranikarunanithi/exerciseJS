(() => {
  var check = false;
  while (check === false) {
      var age = prompt("Insert your age.")
      var sex = prompt("Insert your sex.")
      var city = prompt("Insert your city.")
     // alert("Age :" + age + "\r\n" + "Sex :" + sex + "\r\n" + "City :" + city + "\r\n")
      check = confirm("Age :" + age + "\r\n" + "Sex :" + sex + "\r\n" + "City :" + city + "\r\n"+"Is this the correct information??");
      
      

  }
})();