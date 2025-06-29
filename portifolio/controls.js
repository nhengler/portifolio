const projectCards = document.querySelectorAll('.project-card');
const projectDescriptions = document.querySelectorAll('.description');

// Adiciona o evento de clique a cada cartão de projeto
projectCards.forEach((card, index) => {
  card.addEventListener('click', function () {
    
    const description = projectDescriptions[index]; // tirar duvida sobre o colchete de index
    
      if (description.style.maxHeight === '500px') { // testar apenas com 1 if
        
        description.style.maxHeight = '0';
        description.style.opacity = '0';
      
        } else {

        description.style.maxHeight = '500px';
        description.style.opacity = '1';
      }
    
  });
});

