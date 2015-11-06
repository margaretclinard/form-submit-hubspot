$( "#test-form" ).submit(function (event) {
  event.preventDefault();

  var $form = $(this),
      fName = $form.find("input[name='firstName']").val(),
      lName = $form.find("input[name='lastName']").val(),
      email = $form.find("input[name='email']").val(),
      url = 'https://forms.hubspot.com/uploads/form/v2/301979/9eb02cf8-c995-46b2-a21a-55b21126d5f9';

  $.post(url + 'firstname=' + fName + '&lastname=' + lName + '&email=' + email, { firstname: fName, lastname: lName, email: email })
   .done(function(data){
      console.log("done");
  });
});