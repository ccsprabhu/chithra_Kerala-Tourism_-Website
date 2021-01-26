
var email=document.getElementById("email");
var pass=document.getElementById("pass");

function val(){
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/;
	  
    if(!(reg.test((email).value))){
      alert('please enter valid email');
      return false;
  }
  else if(!(passw.test((pass).value))){
      alert('password must contain minimum 8 characters,one uppercase,one lower case,one number');
      return false;
  }
  else{
        return true;
      }
}







