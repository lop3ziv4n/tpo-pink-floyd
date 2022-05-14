function valid_send() {
    var name = document.contactForm.name;
    var email = document.contactForm.email;
    var phone = document.contactForm.phone;
    var item = document.contactForm.item;

    if (name.value.length == 0) {
        alert('Se debe completar el Nombre');
        name.focus();
        return;
    }
    if (email.value.length == 0 && phone.value.length == 0) {
        alert('Se debe completar el Email o el Telefono');
        email.focus();
        return;
    }
    if (item.value.length == 0) {
        alert('Se debe seleccionar un Item de Compra');
        item.focus();
        return;
    }
    alert("El formulario fue enviado con exito, un operador se contactara con usted a la brevedad");
    document.contactForm.submit();
}