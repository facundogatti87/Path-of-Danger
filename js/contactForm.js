function contactForm() {
  var contactName = document.getElementById("contactName").value;
  var contactSubject = document.getElementById("contactSubject").value;
  var contactPhone = document.getElementById("contactPhone").value;
  var contactEmail = document.getElementById("contactEmail").value;
  var contactMessage = document.getElementById("contactMessage").value;
  var contactError_message = document.getElementById("contactError_message");

  contactError_message.style.padding = "10px";

  var text;

  if (contactName.length < 3) {
    text = "Ingrese un nombre válido";
    contactError_message.innerHTML = text;
    return false;
  }

  if (contactSubject.length < 3) {
    text = "Ingrese un asunto válido";
    contactError_message.innerHTML = text;
    return false;
  }
  if (isNaN(contactPhone) || contactPhone.length != 10) {
    text = "Ingrese un teléfono válido";
    contactError_message.innerHTML = text;
    return false;
  }
  if (contactEmail.indexOf("@") == -1 || contactEmail.length < 6) {
    text = "Ingrese un email válido";
    contactError_message.innerHTML = text;
    return false;
  }
  if (contactMessage.length <= 30) {
    text = "Ingrese un mensaje mayor a 30 carácteres";
    contactError_message.innerHTML = text;
    return false;
  }
  alert("Formulario enviado correctamente");
  return true;
}