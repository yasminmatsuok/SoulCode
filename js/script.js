
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('active');
      otherItem.querySelector('.faq-answer').classList.remove('active');
    });

    
    if (!isActive) {
      item.classList.add('active');
      answer.classList.add('active');
    }
  });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const missionCards = document.querySelectorAll('.mission-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    missionCards.forEach(card => {
      if (filter === 'todas' || card.getAttribute('data-difficulty') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');
const chatMessages = document.getElementById('chatMessages');

const respostas = {
  'ver minhas missões': 'Você tem 3 missões pendentes: 🚌 Use Transporte Público, ♻️ Recicle seu Lixo e 💡 Economize Energia. Quer iniciar alguma?',
  'quantos pontos tenho?': 'Você tem 450 pontos acumulados! 🏆 Continue assim, está indo muito bem!',
  'dicas sustentáveis': 'Aqui vão algumas dicas: 🌱 Prefira transporte público, ♻️ separe seu lixo, 💡 desligue as luzes ao sair e 🚿 tome banhos mais curtos!',
};

function sendMessage(text) {
  if (!text.trim()) return;

  const userMsg = document.createElement('div');
  userMsg.classList.add('chat-message', 'user-message');
  userMsg.innerHTML = `<p>${text}</p>`;
  chatMessages.appendChild(userMsg);

  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    const avatarMsg = document.createElement('div');
    avatarMsg.classList.add('chat-message', 'avatar-message');

    const resposta = respostas[text.toLowerCase()] || 
      'Entendi! Estou aqui para te ajudar a ser mais sustentável. 🌱 Tente perguntar sobre suas missões ou pontos!';

    avatarMsg.innerHTML = `<p>${resposta}</p>`;
    chatMessages.appendChild(avatarMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 800);

  if (chatInput) chatInput.value = '';
}

function sendSuggestion(text) {
  sendMessage(text);
}

if (chatSendBtn) {
  chatSendBtn.addEventListener('click', () => {
    sendMessage(chatInput.value);
  });
}

if (chatInput) {
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage(chatInput.value);
    }
  });
}



const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const successMsg = document.getElementById('successMsg');

    // Reset
    [name, email, subject, message].forEach(field => field.classList.remove('error'));
    [nameError, emailError, subjectError, messageError].forEach(err => err.classList.remove('visible'));

    if (!name.value.trim()) {
      name.classList.add('error');
      nameError.classList.add('visible');
      valid = false;
    }

    if (!email.value.trim() || !email.value.includes('@')) {
      email.classList.add('error');
      emailError.classList.add('visible');
      valid = false;
    }

    if (!subject.value.trim()) {
      subject.classList.add('error');
      subjectError.classList.add('visible');
      valid = false;
    }

    if (!message.value.trim()) {
      message.classList.add('error');
      messageError.classList.add('visible');
      valid = false;
    }

    if (valid) {
      successMsg.classList.add('visible');
      contactForm.reset();
      setTimeout(() => successMsg.classList.remove('visible'), 4000);
    }
  });
}


const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    hamburger.classList.toggle('active');
  });
}