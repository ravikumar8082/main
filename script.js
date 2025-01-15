function sendMail(){
let parms = {
    name : document.getElementById("fullName").value,
    cnic : document-getElementById("cnic").value,
    lastDegree : document.getElementById("lastDegree").value,
    email : document-getElementById("email").value,
    contact : document.getElementById("contact").value
}
  emailjs.send("service_iioq66r","template_ljeu13d",parms).then(alert("Email Sent!!"))
}
