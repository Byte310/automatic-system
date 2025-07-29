// Chatbot Simulado (sem Dialogflow - respostas pré-definidas)
document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const closeChat = document.getElementById('close-chat');
    const sendButton = document.getElementById('send-button');
    const userInput = document.getElementById('user-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Toggle Chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.style.display = chatbotContainer.style.display === 'flex' ? 'none' : 'flex';
    });

    closeChat.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
    });

    // Respostas Automáticas
    const responses = {
        "ola": "Olá! Como posso ajudar? 😊",
        "serviços": "Oferecemos: 1) Consultoria em TI 2) Eletrotop 3) Desenvolvimento Web.",
        "contato": "Nosso e-mail: contato@tecnofuturo.com.br",
        "default": "Desculpe, não entendi. Digite 'serviços', 'contato' ou 'ajuda'."
    };

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const message = userInput.value.toLowerCase();
        if (!message) return;

        // Adiciona mensagem do usuário
        appendMessage(message, 'user');
        userInput.value = '';

        // Resposta do bot (simulada)
        setTimeout(() => {
            let reply = responses.default;
            if (message.includes('ola') || message.includes('oi')) reply = responses.ola;
            else if (message.includes('serviço') || message.includes('servicos')) reply = responses.serviços;
            else if (message.includes('contato') || message.includes('email')) reply = responses.contato;

            appendMessage(reply, 'bot');
        }, 1000);
    }

    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
});

// Inicializa Partículas (background-particles.js)
particlesJS.load('particles-js', 'assets/particles.json', () => {
    console.log("Partículas carregadas!");
});