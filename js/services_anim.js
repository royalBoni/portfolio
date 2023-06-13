const main4_content_anim = document.querySelectorAll('.main4_col');
main4_content_anim[0].classList.remove('square-transition');

// Create the observer, same as before:
const main4_observerrr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      main4_content_anim[0].classList.add('square-transition');
      setTimeout(() => {
        main4_content_anim[1].classList.add('square-transition');
    }, 300);
     
    setTimeout(() => {
        main4_content_anim[2].classList.add('square-transition');
    }, 400);
      return;
    }

    main4_content_anim[0].classList.remove('square-transition');
    main4_content_anim[1].classList.remove('square-transition');
    main4_content_anim[2].classList.remove('square-transition');
  });
});

main4_observerrr.observe(document.querySelector('.main4_col'));

