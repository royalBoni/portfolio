/* const main5_content = document.querySelector('.main5_content');
const mob_1 = document.querySelector('.mob_1');
const mob_2 = document.querySelector('.mob_2');
main5_content.classList.remove('square-transition');

// Create the observer, same as before:
const main5_observerrr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      main5_content.classList.add('square-transition');
      mob_1.classList.add('square-transition');
      mob_2.classList.add('square-transition');
      return;
    }

    main5_content.classList.remove('square-transition');
    mob_1.classList.remove('square-transition');
    mob_2.classList.remove('square-transition');
    
  });
});

main5_observerrr.observe(document.querySelector('.main5_content'));



 */



const mob_1 = document.querySelector('.mob_1');
const mob_2 = document.querySelector('.mob_2');


// Create the observer, same as before:
const main5_observerrr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      mob_1.classList.add('square-transition');
     
      return;
    }

    mob_1.classList.remove('square-transition');
   
    
  });
});

main5_observerrr.observe(document.querySelector('.mob_1'));


const main5_observerrr2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      
      mob_2.classList.add('square-transition');
      return;
    }

    
    mob_2.classList.remove('square-transition');
    
  });
});

main5_observerrr2.observe(document.querySelector('.mob_2'));



