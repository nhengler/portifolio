const projectCards = document.querySelectorAll('.project-card');
const projectDescriptions = document.querySelectorAll('.description');

// adiciona o evento de clique a cada cartão de projeto
projectCards.forEach((card, index) => {
  card.addEventListener('click', function () {
    
    const description = projectDescriptions[index]; 
    
      if (description.style.maxHeight === '500px') { 
        
        description.style.maxHeight = '0';
        description.style.opacity = '0';
      
        } else {

        description.style.maxHeight = '500px';
        description.style.opacity = '1';
      }
    
  });
});

