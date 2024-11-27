function carregarComponente(id, arquivo) {
    fetch(arquivo)
      .then((response) => {
        if (!response.ok) throw new Error(`Erro ao carregar ${arquivo}`);
        return response.text();
      })
      .then((html) => {
        document.getElementById(id).outerHTML = html;
      })
      .catch((error) => console.error(error));
  }
  
  // Vai carregar dinamicamente qualquer componente (; 
carregarComponente("head", "./projeto/head.html");
carregarComponente("navbar", "./projeto/navbar.html");
carregarComponente("footer", "./projeto/footer.html");
