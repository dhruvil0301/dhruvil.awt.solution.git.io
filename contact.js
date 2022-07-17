
function validate(){
    var name = document.getElementById("name");
    var subject = document.getElementById("subject");
    var email = document.getElementById("email");
    var phoneno = document.getElementById("phoneno");
    var entertextmessege =document.getElementById("entertextmessege");
    if (name.value=="" || suject.value=="") {
        alert("no blank value allow");
        return false;
    }   else{
        true;
    }
}
