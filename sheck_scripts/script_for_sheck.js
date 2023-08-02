let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin:'top'});
sr.reveal('.hero-img', {delay: 450, origin:'top'});
sr.reveal('.clans-img', {delay: 450, origin:'top'});
sr.reveal('.icons', {delay: 500, origin:'left'});
sr.reveal('.scroll-down', {delay: 500, origin:'right'});

const links = [
    "https://www.youtube.com/watch?v=rtVBYzJAYoM",
    "https://www.youtube.com/watch?v=sip30r736mM",
    "https://www.youtube.com/watch?v=V7NyW-mRaag",
    "https://www.youtube.com/watch?v=4yz1eXgBg3I",
    "https://www.youtube.com/watch?v=ivR-eQyUZPQ",
    "https://www.youtube.com/watch?v=1x4-3_7NvkE",
    "https://www.youtube.com/watch?v=Ugoo2IcCvF8",
    "https://www.youtube.com/watch?v=jS7InB0qntI",
    "https://www.youtube.com/watch?v=nFlirh6j1wc",
    "https://www.youtube.com/watch?v=uNLvgT2W66E",
    "https://www.youtube.com/watch?v=Npf1grRZNKM",
    "https://www.youtube.com/watch?v=VZca4dPK02E",
    "https://www.youtube.com/watch?v=2FmT5p97sQg",
    "https://www.youtube.com/watch?v=iWBeo9ap1tw",
    "https://www.youtube.com/watch?v=9-eCxf_acUE"
];

function redirect() {
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    window.location.href = randomLink;
}