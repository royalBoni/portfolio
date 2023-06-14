const first_col_anim = document.querySelector('.main2_firstcol');
const second_col_anim = document.querySelector('.main2_secondcol');
const skills_box = document.querySelector('.skills_box');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer_1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      first_col_anim.classList.add('square-transition');
      return;
    }

    first_col_anim.classList.remove('square-transition');
  });
});

observer_1.observe(document.querySelector('.main2_firstcol'));


const observer_2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      second_col_anim.classList.add('square-transition');
      return;
    }

    second_col_anim.classList.remove('square-transition');
  });
});

observer_2.observe(document.querySelector('.main2_secondcol'));


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




