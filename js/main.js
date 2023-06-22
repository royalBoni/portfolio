const html = document.querySelector("#html");
const main1 = html.querySelector("#man1")
const main4 = html.querySelector("#man4")
const header = html.querySelector("header")
const nav = document.querySelector("#nav");
const fig = main1.querySelector("figure");
const a = main1.querySelectorAll("a");
const main4_content = main4.querySelector("#main4_content");
const main4_col1 = main4.querySelector("#m4col1");
const main4_col2 = main4.querySelector("#m4col2");
const main4_col3 = main4.querySelector("#m4col3");
const P = main4_content.getElementsByTagName("P");
const content = main4_content.getElementsByClassName("content");
const main5 = html.querySelector("#main5");
const main5_col1 = main5.querySelector("#main5_col1")
const content15 = main5_col1.querySelector("#content15");
const content_h3 = content15.getElementsByTagName("h3");
const content_p = content15.getElementsByTagName("p");
const main5_col2 = main5.querySelector("#main5_col2");
const content25 = main5_col2.querySelector("#content25");
const label = content25.getElementsByTagName("label");
const input = content25.getElementsByTagName("input");
const textarea = content25.getElementsByTagName("textarea");
const button = content25.getElementsByTagName("button");
const mySlides = document.getElementsByClassName("mySlides");
const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");
const wrap = document.querySelector(".wrap");
const content5_p = document.querySelectorAll(".content5_p");
const lab = document.getElementsByClassName('label')


console.log(content5_p);
console.log(lab)
/* for(let i=0; i<lab.length; i++){
    console.log(lab[1])
    lab[i].style.color="red";
}
 */
window.onresize = screen;
window.onload = screen;

function screen (){
myWidth = window.innerWidth;


 if(myWidth<576){
     wrap.classList.remove("wrap")
 }

 else{
    wrap.classList.add("wrap")
 }
}



const ul =nav.querySelector("#ul");

const mode =ul.querySelector("#mode");


mode.addEventListener("click", (event)=>{
    event.preventDefault()
    html.classList.toggle("html_dark");
    header.classList.toggle("header_dark");
    fig.classList.toggle("figure_dark");
    mode.classList.toggle("mode-dark")
    

    for(let i=0; i<a.length; i++){
        a[i].style.color="#fefefe";
    }

    main4_col1.classList.toggle("main4_col_dark");
    main4_col2.classList.toggle("main4_col_dark");
    main4_col3.classList.toggle("main4_col_dark");
    
    for(let i=0; i<P.length; i++){
        P[i].style.color="#fefefe";
    }

    for(let i=0; i<content.length; i++){
        content[i].style.color="rgb(153, 149, 149)";
    }

    for(let i=0; i<content_h3.length; i++){
        content_h3[i].style.color="rgb(153, 149, 149)";
    }

    for(let i=0; i<content_p.length; i++){
        content_p[i].style.color="#fefefe";
    }

    for(let i=0; i<lab.length; i++){
        lab[i].classList.toggle("label_dark")
        /* lab[i].style.color="#fefefe"; */
    }

    for(let i=0; i<input.length; i++){
        input[i].classList.toggle("label_dark");
    }

    for(let i=0; i<mySlides.length; i++){
        mySlides[i].classList.toggle("mySlides_dark");
    }
    
    prev[0].classList.toggle("cont_dark");
    next[0].classList.toggle("cont_dark");
    textarea[0].classList.toggle("label_dark")
    button.classList.toggle("button_dark");
    
    nav.classList.toggle("nav_dark");
    nav.classList.toggle("nav_dark2");

    for(let i=0; i<content5_p.length; i++){
        content5_p[i].style.color="red";
        /* content5_p[i].classList.toggle("content5_p_dark") */
    }

    /* for(let i=0; i<lab.length; i++){
        console.log(lab[1])
        lab[i].style.color="red";
    } */
    
   
    
})


    

