window.addEventListener('load', function() {
  // Page Load Animation
  document.querySelectorAll('.contOut').forEach(function(element) {
    element.style.transition = 'opacity 1.2s';
    element.style.opacity = '1';
  });

  // Jobs Accordion
  document.querySelectorAll('.fa-plus').forEach(function(element) {
    element.closest('.job').querySelector('p').style.display = 'none';
  });

  document.querySelectorAll('.openBtn').forEach(function(button) {
    button.addEventListener('click', function() {
      const job = button.closest('.job');
      const description = job.querySelector('p');

      if (button.classList.contains('open')) {
        button.classList.remove('open', 'fa-minus');
        button.classList.add('fa-plus');
        description.style.transition = 'opacity 0.2s';
        description.style.opacity = '0';
        setTimeout(() => {
          description.style.display = 'none';
        }, 200);
      } else {
        button.classList.add('open', 'fa-minus');
        button.classList.remove('fa-plus');
        description.style.display = 'block';
        setTimeout(() => {
          description.style.transition = 'opacity 0.4s';
          description.style.opacity = '1';
        }, 0);
      }
    });
  });
});
