const main3_content_anim = document.querySelector('.main3_content');
main3_content_anim.classList.remove('square-transition');

// Create the observer, same as before:
const main3_observerrr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      main3_content_anim.classList.add('square-transition');
      return;
    }

    main3_content_anim.classList.remove('square-transition');
  });
});

main3_observerrr.observe(document.querySelector('.main3'));


const main3_first_anim = document.querySelector('.main3_firstcol');
const main3_second_anim = document.querySelector('.main3_secondcol');
main3_first_anim.classList.remove('square-transition');
main3_second_anim.classList.remove('square-transition');

// Create the observer, same as before:
const main3_col_observerrr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      main3_first_anim.classList.add('square-transition');
      main3_second_anim.classList.add('square-transition');
      return;
    }

    main3_first_anim.classList.remove('square-transition');
    main3_second_anim.classList.remove('square-transition');
  });
});

main3_col_observerrr.observe(document.querySelector('.main3'));
