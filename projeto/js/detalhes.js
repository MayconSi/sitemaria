const quadros = {
    mikaela: {
        nome: "MIKAELA",
        descricao: "Ela é minha crença, meu fôlego e meu amor. Mikaela é o mar, mais precisamente a dona dele. É onde eu consigo descansar e me sentir segura, onde eu posso chorar e ser fraca. Mikaela é a representação daquilo que eu acredito. É a representação do meu axé.🌊",
        imagens: ["./assets/mikaela2.png", "./assets/mikaela1.png"],
        whatsapp: "557192729416",
        instagram: "https://www.instagram.com/ceru.mariny/",
    },
    olamide: {
        nome: "OLAMIDE",
        descricao: "Depois de um tempo, volto com a Olamide. Ela é minha primeira tela de 2024, e também a que escancara nascimento. O renascer.Ela é vida. A esperança do viver, o querer ter, mesmo não conseguindo por seus caminhos mais viáveis. O processo da Olamide foi dificultoso, não por ela ser uma tela complicada, como já disse sobre outras. Mas sim pela situação em que ela foi parida.Ela me rendeu um olhar para dentro de mim, uma respiração funda de vamos agora.",
        imagens: ["./assets/olamide3.png", "./assets/olamide2.png"],
        whatsapp: "557192729416",
        instagram: "https://www.instagram.com/ceru.mariny/",
    },
    vanessa: {
        nome: "VANESSA",
        descricao: "Na maioria das vezes que venho aqui, eu sempre tenho algo bem específico para falar sobre minhas telas. Eu sempre exponho os sentimentos reais os quais marcam cada parte colorida das minhas obras. Porém, hoje eu trago uma que é tudo;o ar que me falta;a dor de cabeça de todo dia; os pensamentos ruins de toda a hora;a tristeza. É a dificuldade de existir, ali quando você só se sente triste. Vanessa é tudo, tudo azul.Eu queria expressar nela a sensação de grandeza no que se sente, como se ela fosse constante igual a vida. Vanessa é a tristeza cotidiana. Um tom nem um pouco fácil de desabafar.",
        imagens: ["./assets/vanessa.png", "./assets/vanessa1.png"],
        whatsapp: "557192729416",
        instagram: "https://www.instagram.com/ceru.mariny/",
    },
    vania: {
        nome: "VÂNIA",
        descricao: "Vânia talvez seja uma das telas mais carregadas de significados que já pintei. Ela é assim por eu ter conseguido pintar um sentimento, que pensei ser impossível de passar para uma tela, ainda mais uma tela grande como ela. Vânia é uma respiração profunda e o amadurecimento.As cores dela conversam dentro da própria tela, como algo singular. Vânia é o significado de viver.",
        imagens: ["./assets/VANIA2.png", "./assets/vania3.png"],
        whatsapp: "557192729416",
        instagram: "https://www.instagram.com/ceru.mariny/",
    },
    vasti: {
        nome: "VASTI",
        descricao: "Mudança, é isso que essa tela significa. Vasti é a segunda tela que pintei nesse novo processo que estou enfrentando com a minha arte.Vasti já foi várias, por eu achar que ela não estava boa como eu gostaria. Pensava que ela não estava demonstrando o que eu queria passar. Sendo assim, eu abandonei a tela por dias e dias, quando percebi que precisava concluí-la. Eu precisava aceitar, organizar minhas sensações e minhas vontades. Vasti é o novo, a possibilidade, a beleza e a dor.Todas as suas cores foram escolhidas por mim para que ela falasse o que minha boca não poderia dizer. Ela é sincera, já se cansou de fingir. É serena, mesmo com todas as marcas do passado e do sangue que escorre por seu corpo. Ela não tem mais receios, ela é quem é com todas essas feridas.",
        imagens: ["./assets/VASTI2.png", "./assets/vasti3.png"],
        whatsapp: "557192729416",
        instagram: "https://www.instagram.com/ceru.mariny/",
    },
    monique: {
        nome: "MONIQUE",
        descricao: "Bom, como começar a escrever sobre uma tela tão livre e de tamanha personalidade como ela? Uma obra que faz questão de se bastar e ser independente de todas as expectativas que projetei sobre ela. Monique é uma vida cheia de erros, sendo esses erros seus grandes acertos. A que caminha observando a paisagem, que sabe o valor de cada segundo, e entende que jamais poderá voltar o tempo.Monique é passional. Ama sem ego, sem orgulho. Ela é intensa ao seu modo e não tem vergonha dos sentimentos que enchem a boca.Monique é um conjunto de sentimentos fortes demais, os quais consegui expressar graças a ela.",
        imagens: ["./assets/MONIQUE2.png", "./assets/monique3.png"],
        whatsapp: "557192729416",
        instagram: "https://www.instagram.com/ceru.mariny/",
    },
};


let quadroId = null;


function displayDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    quadroId = urlParams.get('id'); 


    const quadro = quadros[quadroId];

    if (quadro) {
        const detalhesDiv = document.getElementById("detalhes");

        detalhesDiv.innerHTML = `
            <div class="container detalhes-container">
                <!-- Imagem principal e título -->
                <div class="imagem-titulo">
                    <img id="main-image" src="${quadro.imagens[0]}" alt="${quadro.nome}" class="img-fluid">
                    <div>
                        <h1 class="text-center">${quadro.nome}</h1>
                        <p class="text-center">${quadro.descricao}</p>
                    </div>
                </div>

                <!-- Miniaturas -->
                <div class="thumbs text-center">
                    ${quadro.imagens.map((img, index) => `
                        <div class="thumb" onclick="changeImage(${index})">
                            <img src="${img}" alt="Imagem ${index+1}" class="img-thumbnail" />
                        </div>
                    `).join('')}
                </div>

                <!-- Botões -->
                <p class="text-center" id="p-image">Interessado (a)? fale diretamente com o artista nos botões abaixo 👇</p>
                <div class="botoes text-center mt-3">
                    <a href="https://wa.me/${quadro.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20quadro%20${encodeURIComponent(quadro.nome)}" class="btn btn-success" target="_blank" rel="noopener">
                        <i class="fab fa-whatsapp"></i> <!-- Ícone do WhatsApp -->
                    </a>
                    <a href="${quadro.instagram}" class="btn btn-primary ml-2" target="_blank" rel="noopener">
                        <i class="fab fa-instagram"></i> <!-- Ícone do Instagram -->
                    </a>
                </div>
            </div>
        `;
    } else {
        document.getElementById("detalhes").innerHTML = "<p class='text-center'>Quadro não encontrado.</p>";
    }
}

// Função para mudar a imagem principal
function changeImage(index) {
    const mainImage = document.getElementById('main-image');
    const images = quadros[quadroId].imagens; 
    mainImage.src = images[index];  
}

window.onload = displayDetails;
