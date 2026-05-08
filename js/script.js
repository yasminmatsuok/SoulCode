
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Fecha todos os outros
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('active');
      otherItem.querySelector('.faq-answer').classList.remove('active');
    });

    // Abre o clicado
    if (!isActive) {
      item.classList.add('active');
      answer.classList.add('active');
    }
  });
});