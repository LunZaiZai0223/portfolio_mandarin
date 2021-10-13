const navbarA = document.querySelectorAll('.navbar a');
const aboutMe = document.getElementById('about-me');
const projectDiv = document.getElementById('projects');
const courseDiv = document.getElementById('courses');
const skillsAndPersonalityDiv = document.getElementById('skills-and-personality');
const workExperienceDiv = document.getElementById('work-experience');
const educationDiv = document.getElementById('education');
const footer = document.getElementById('contact');
const divsArray = [aboutMe, projectDiv, courseDiv, skillsAndPersonalityDiv, workExperienceDiv, educationDiv];

//聯絡資訊的box
const contactBtn = document.querySelector('.contact-btn');
const contactBox = document.querySelector('.contact-box');

window.onload = init;

//element.offsetTop => 回傳 element 的 content-area(border, padding, content) 到上層元素的 content-area(border, padding, content)之距離。
//element.clientHeight => 回傳 element 的高度(只有 padding 跟 content)
window.addEventListener('scroll', () => {
    let current = '';
    divsArray.forEach(div => {
        const divOffsetTop = div.offsetTop;
        const divClientHeight = div.clientHeight;
        if (pageYOffset >= (divOffsetTop - divClientHeight / 2)) {
            current = div.getAttribute('id');
            // console.log(pageYOffset);
            console.log(current);
        }
    });

    navbarA.forEach(a => {
        a.classList.remove('active');
        if (a.classList.contains(current)) {
            a.classList.add('active');
        }
    })

});



function init() {
    contactBtn.addEventListener('click', () => {
        contactBox.classList.remove('d-none');
    });
}
