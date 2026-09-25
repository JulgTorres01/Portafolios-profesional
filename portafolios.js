document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

   
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue

        
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        
        if (nombre === '' || correo === '' || mensaje === '') {
            mostrarMensaje('Por favor, completa todos los campos.', 'error-msg');
            return;
        }

        if (!validarCorreo(correo)) {
            mostrarMensaje('Por favor, ingresa un correo electrónico válido.', 'error-msg');
            return;
        }

        
        mostrarMensaje('¡Gracias por contactarme, Julio se pondrá en contacto pronto!', 'success-msg');
        
        
        contactForm.reset();
    });

    
    function validarCorreo(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    
    function mostrarMensaje(texto, clase) {
        formMessage.textContent = texto;
        formMessage.className = `form-message ${clase}`;
        
        
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 4000);
    }
});