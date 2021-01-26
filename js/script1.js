var fname=document.getElementById("fname");
var sname=document.getElementById("sname");
var phone=document.getElementById("phone");
var email=document.getElementById("email");
var pass=document.getElementById("pass");
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/;



function val()
{ 
    var letters = /^[A-Za-z]+$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/;
    if(!(letters.test((fname).value)))
      {    
        alert('Please input alphabet characters only for firstname');
      return false;
      }
     
    else if(!(letters.test((sname).value)))
      {    
        alert('Please input alphabet characters only for secondname');
        return false;
      }
    else if(!(phoneno.test((phone).value))){
        alert('please enter 10 numbers,XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX');
        return false;
    }
    else if(!(reg.test((email).value))){
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
function fun(){
    var pa=document.getElementById("p");
    if(passw.test((pass).value)){
     pa.innerText="password is strong";
     pa.style.color="green";
     }
     if(pass.value.length>3 && pass.value.length<8)
    {
        pa.innerText="password is medium"; 
        pa.style.color="orange";
    } 
    if(pass.value.length<3)
    {
        pa.innerText="Password is poor";
        pa.style.color="red"
    }   
}
