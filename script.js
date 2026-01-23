function sendMessage() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const subject = document.getElementById("subject").value;


    if (!name || !email || !subject || !message) {
        alert("Bitte füllen Sie alle Pflichtfelder aus.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
        return;
    }

    const mailtoLink = `mailto:abdul-1992@hotmail.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nTelefon: " + phone + "\n\nNachricht:\n" + message)}`;

    // Diese Zeile hat gefehlt:
    window.location.href = mailtoLink;

    setTimeout(() => {
       document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
      }, 500);
}