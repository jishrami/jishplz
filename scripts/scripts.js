const backToTop = document.querySelector(".footer__top");
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})

async function resumeUpdate() {
    try {
        const response = await fetch('resume/index.html');
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const lastModified = new Date(response.headers.get('last-modified'));
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(lastModified).toLocaleDateString('en-US', options);
        document.querySelector('.projects__resume__description__link').appendChild(document.createTextNode(`Last Updated: ${formattedDate}`));
    } catch (error) {
        console.error('Error:', error)
    }
}

resumeUpdate()

function copyDate() {
    document.querySelector('.footer__copyright').innerHTML = `&copy; ${new Date().getFullYear()} Josh Ramirez`;
}

copyDate()


const aboutMe = document.querySelector('#about');
const aboutButton = document.querySelector('#about-link');

aboutButton.addEventListener('click', () => {
    aboutMe.scrollIntoView({ 
        behavior: 'smooth' });
});