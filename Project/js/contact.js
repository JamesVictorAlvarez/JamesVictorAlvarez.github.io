function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "testedjames@gmail.com",
        Password : "",
        To : 'testedjames@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}