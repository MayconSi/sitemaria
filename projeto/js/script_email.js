// Inicializa o EmailJS
(function() {
    emailjs.init("wJud25MRd95IMFOuN");  // Substitua pelo seu User ID
})();

window.onload = function() {
    // Obtém o formulário e envia ao ser enviado
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Impede o envio padrão do formulário

        // Envia o formulário para o serviço de e-mail configurado
        emailjs.sendForm('service_cerumariny', 'template_ceru_mariny', this)  // Substitua pelos seus IDs
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
