$( "#test-form" ).submit(function (event) {
  event.preventDefault();

  var $form = $(this),
      fName = $form.find("input[name='firstName']").val(),
      lName = $form.find("input[name='lastName']").val(),
      email = $form.find("input[name='email']").val(),
      portal_id = hubspot_portal_id,
      form_guid = hubspot_form_guid,
      url = 'https://forms.hubspot.com/uploads/form/v2/' + portal_id + '/' + form_guid;

  $.post(url + 'firstname=' + fName + '&lastname=' + lName + '&email=' + email, { firstname: fName, lastname: lName, email: email })
   .done(function(data){
      console.log("done");
  });
});