$(document).ready(function(){
    
    $("#phoneNumber").on("change keyup paste click",function(){
        $("#phoneNumberError").html("");
            var phoneNumberValue =$(this).val();
            var phoneNumberLength = phoneNumberValue.length;
        $("#phoneNumberLength") .text(phoneNumberLength);//Show length of string [only during development]
        $("#phoneNumberValue")  .text(phoneNumberValue);//show typed string
        $("#phoneNumber")       .blur(function(){            
            var valueToCheck = /[+][0-9]{12}/;
            validateInput(phoneNumberValue,valueToCheck);
            if(validateInput(phoneNumberValue,valueToCheck)==true){
               $("#phoneNumberError").html("Number Valid!");
               $("input#phoneNumber.form-control").css('border','1px solid rgba(0,0,0,.15)');
              
            }else{
                $("#phoneNumberError").html("Number NOT Valid!");
                 $("input#phoneNumber.form-control").css('border','1px solid rgba(238, 15, 15, 0.95)');
            }
        });        
    });
    
    function validateForm(){
        validatePhoneNumber(phoneNumberValue);
        validatePassword(passwordValue);
        
        if(validatePhoneNumber()==true || validatePassword()==true){
            return true;
            //perform ajax
        }else{ 
            return false;
        }        
    }
    function validatePhoneNumber(inputValue){
      //Validate input against a regular expression
      var valueToCheck = /[+][0-9]{12}/;
        if(inputValue.match(valueToCheck)){
            $("#phoneNumberError").html("Number Valid!");
            return true;
        }else{
           $("#phoneNumberError").html("Number NOT Valid!");
            return false;
        }
    }
    function validatePassword(field){
        if (field == "") {
            return false;
            $("#passwordError").html("No Password was entered.");
            }
        else if (field.length < 6){
            $("#passwordError").html("Passwords must be at least 6 characters.");
            return false;
        }
        else if (!/[a-z]/.test(field) || ! /[A-Z]/.test(field) || !/[0-9]/.test(field)){
            $("#passwordError").html("Passwords require one each of a-z, A-Z and 0-9");
            return true;}
}
    
    
    
    
    
    function validateInput(inputValue,regExp){
      //Validate input against a regular expression
        if(inputValue.match(regExp)){
            $("#phoneNumberError").html("Number Valid!");
            return true;
        }else{
           $("#phoneNumberError").html("Number NOT Valid!");
            return false;
        }
    }
    function validateEmail(field){
        //Validate input Email
        if (field == "") return "No Email was entered.\n"
        else if (!((field.indexOf(".") > 0) &&(field.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(field))
        return "The Email address is invalid.\n"
        return ""
        }
})