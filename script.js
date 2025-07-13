function scrollToSection(sectionId){
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
            });
});

window.addEventListener('load', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(element => {
                element.style.animationDelay = '0.5s';
            });
        });

document.querySelectorAll('table tbody tr').forEach(row => {
            row.addEventListener('click', function() {
                alert('Book selected: ' + this.cells[1].textContent);
            });
        });