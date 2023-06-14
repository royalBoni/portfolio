const main3_content_anim = document.querySelector('.main3_content');
main3_content_anim.classList.remove('square-transition');

// Create the observer, same as before:
const main3_observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      main3_content_anim.classList.add('square-transition');
      return;
    }

    main3_content_anim.classList.remove('square-transition');
  });
});

main3_observer.observe(document.querySelector('.main3'));


const main3_first_anim = document.querySelector('.main3_firstcol');
const main3_second_anim = document.querySelector('.main3_secondcol');
main3_first_anim.classList.remove('square-transition');
main3_second_anim.classList.remove('square-transition');

// Create the observer, same as before:
const main3_col_observer_1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      main3_first_anim.classList.add('square-transition');
      return;
    }

    main3_first_anim.classList.remove('square-transition');
  });
});

main3_col_observer_1.observe(document.querySelector('.main3_firstcol'));

const main3_col_observer_2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      main3_second_anim.classList.add('square-transition');
      return;
    }

    main3_second_anim.classList.remove('square-transition');
  });
});

main3_col_observer_2.observe(document.querySelector('.main3_secondcol'));
