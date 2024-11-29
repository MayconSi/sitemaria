
(function() {
    emailjs.init("wJud25MRd95IMFOuN");  
})();

window.onload = function() {
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();  

        
        emailjs.sendForm('service_cerumariny', 'template_ceru_mariny', this)  
            .then(function(response) {
                console.log('SUCCESS!', response);
                document.getElementById('statusMessage').textContent = 'Mensagem enviada com sucesso!';
                document.getElementById('statusMessage').classList.add('text-success');
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById('statusMessage').textContent = 'Erro ao enviar a mensagem. Tente novamente.';
                document.getElementById('statusMessage').classList.add('text-danger');
            });
    });
};
