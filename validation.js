function validateForm() {
    let message=""
    if (document.forms["myForm"]["firstname"].value == "")  message+="- First Name must be filled out\r\n"
    if (document.forms["myForm"]["lastname"].value == "")   message+="- Last Name must be filled out\r\n"
    if (document.forms["myForm"]["address"].value == "")    message+="- Address must be filled out\r\n"
    let email = document.forms["myForm"]["email"].value
    let regEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!regEmail.test(email)) message+="- Email address is not valid"
    
    let password = document.forms["myForm"]["password"].value
    /*
        /^
        (?=.*\d)          // should contain at least one digit
        (?=.*[a-z])       // should contain at least one lower case
        (?=.*[A-Z])       // should contain at least one upper case
        [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
        $/
    */
    let regPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if(!regPassword.test(email)) 
        message+="- Password should contain at least 8 characters, where at least one number, one lower case and one upper case characters"
    if (document.forms["myForm"]["comments"].value == "")   message+="- Comments must be filled out\r\n"
    if(message== "")    alert("submission successful")
    else alert("You have the following error(s):\r\n"+message);
    return false;
}