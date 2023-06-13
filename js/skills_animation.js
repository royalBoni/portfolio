const first_col_anim = document.querySelector('.main2_firstcol');
const second_col_anim = document.querySelector('.main2_secondcol');
const skills_box = document.querySelector('.skills_box');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observerrr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      first_col_anim.classList.add('square-transition');
      second_col_anim.classList.add('square-transition');
      return;
    }

    first_col_anim.classList.remove('square-transition');
    second_col_anim.classList.remove('square-transition');
  });
});

observerrr.observe(document.querySelector('.main2'));


const observerrr_skills = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skills_box.classList.add('square-transition');
  
      return;
    }

    skills_box.classList.remove('square-transition');
  
  });
});

observerrr_skills.observe(document.querySelector('.main2'));




