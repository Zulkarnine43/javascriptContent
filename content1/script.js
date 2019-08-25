 
//$('#fname').click(function(){
  //$('#fnameError').text('First name should be between 6 to 15 character:');
//});
//$('#fname').blur(function(){
 // $('#fnameError').text('');
//});
  function checkName(){
    var firstName=$('#fname').val().length;
    if(firstName>=6 && firstName<=15){
        $('#fnameError').text('');
    }
    else{
        $('#fnameError').text('First name should be between 6 to 15 character:');
    }

  }


  $('#fname').click(function(){
    checkName();
  
});
$('#fname').blur(function(){
  checkName();
});


$('#fname').keyup(function(){
    checkName();
});




function checkNamee(){
    var lastName=$('#lname').val().length;
    if(lastName>=6 && lastName<=15){
        $('#lnameError').text('');
    }
    else{
        $('#lnameError').text('last name should be between 6 to 15 character:');
    }

  }


  $('#lname').click(function(){
    checkNamee();
  
});
$('#lname').blur(function(){
  checkNamee();
});


$('#lname').keyup(function(){
    checkNamee();
});


function checkEmailAddress(){
    var pattern = new RegExp(/^[+a-zA-ZO-9._-]+@[a-zA-ZO-9.-]+\.[a-zA-Z](3,4)$/i);
    if(pattern.test($('#email').val())){
        $('#emailError').text('');
    }
    else{
      $('#emailError').text('Email address is invalid');
    }
}


  $('#email').click(function(){
    checkEmailAddress();
  
});
$('#email').blur(function(){
  checkEmailAddress();
});


$('#email').keyup(function(){
    checkEmailAddress();
});


function checkPassword(){
    var password=$('#password').val().length;
    if(password>=6 && password<=15){
        $('#passwordError').text('');
    }
    else{
        $('#passwordError').text('last name should be between 6 to 15 character:');
    }

  }

$('#password').blur(function(){
  checkPassword();
});


$('#password').keyup(function(){
    checkPassword();
});



function checkConfirmPassword(){
    var ConfirmPassword=$('#ConfirmPassword').val().length;
    if(ConfirmPassword>=6 && ConfirmPassword<=15){
        $('#confirmpasswordError').text('');
    }
    else{
        $('#confirmpasswordError').text('last name should be between 6 to 15 character:');
    }

  }


function equal(){
        var password=$('#password').val();
    var ConfirmPassword=$('#ConfirmPassword').val();
    if(password==ConfirmPassword){
        $('#confirmpasswordError').text('');
        return true;
    }
    else{
        $('#confirmpasswordError').text('password and ConfirmPassword didn,t match');
    return false;
    }

  }


$('#ConfirmPassword').blur(function(){
  checkConfirmPassword();
  equal();
});


$('#ConfirmPassword').keyup(function(){
    checkConfirmPassword();
    equal();
});

function checkDistrict(){
    var District=$('#vall').text('');
   // if(District=value){
        $('#districtError').text('selected');
   // }
   // else{
    //    $('#districtError').text(' need select a District name:');
   // }

  }


  $('#vall').click(function(){
    checkDistrict();
  
});
$('#vall').blur(function(){
  checkDistrict();
});


$('#vall').keyup(function(){
    checkDistrict();
});






$('#register').submit(function(){
return true;
});