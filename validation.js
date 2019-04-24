function validateForm() {
    let message=""
    if (document.forms["myForm"]["firstname"].value == "")  message+="- First Name must be filled out!\r\n"
    if (document.forms["myForm"]["lastname"].value == "")   message+="- Last Name must be filled out!\r\n"
    if (document.forms["myForm"]["address"].value == "")    message+="- Address must be filled out!\r\n"
    if (document.forms["myForm"]["email"].value == "")      message+="- Email Address must be filled out!\r\n"
    if (document.forms["myForm"]["password"].value == "")   message+="- Password must be filled out!\r\n"
    if (document.forms["myForm"]["comments"].value == "")   message+="- Comments must be filled out!\r\n"
    if(message== "")    alert("submission successful")
    else alert("You have the following error(s):\r\n"+message);
    return false;
}