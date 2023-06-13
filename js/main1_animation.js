const square = document.querySelector('.main1');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }

    square.classList.remove('square-transition');
  });
});

observer.observe(document.querySelector('.main1'));




const my_intro = document.querySelector('.my_intro');
const first_col = document.querySelector('.first_col');
const third_col = document.querySelector('.third_col');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observerr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      my_intro.classList.add('square-transition');
      first_col.classList.add('square-transition');
      third_col.classList.add('square-transition');
      return;
    }

    my_intro.classList.remove('square-transition');
    first_col.classList.remove('square-transition');
    third_col.classList.remove('square-transition');
  });
});

observerr.observe(document.querySelector('.main1'));
