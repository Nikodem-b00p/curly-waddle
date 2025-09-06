// Czekamy, aż cały dokument HTML zostanie załadowany
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA DLA NAWIGACJI MOBILNEJ ---
    const navMenu = document.querySelector('.nav__menu');
    const navToggle = document.querySelector('.nav__toggle');
    const navLinks = document.querySelectorAll('.nav__link');

    // Funkcja otwierająca/zamykająca menu
    const toggleMenu = () => {
        navMenu.classList.toggle('is-active');
    };
    
    // Otwieranie/zamykanie menu po kliknięciu w "hamburger"
    navToggle.addEventListener('click', toggleMenu);

    // Zamykanie menu po kliknięciu w dowolny link w menu (przydatne na mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('is-active')) {
                toggleMenu();
            }
        });
    });


    // --- LOGIKA DLA ANIMACJI PODCZAS PRZEWIJANIA ---
    // Tworzymy "obserwatora", który będzie sprawdzał, czy elementy są widoczne
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Jeśli element jest w widocznym obszarze
            if (entry.isIntersecting) {
                // Dodajemy mu klasę .is-visible, która uruchamia animację w CSS
                entry.target.classList.add('is-visible');
                // Przestajemy go obserwować, aby animacja nie powtarzała się
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Uruchom animację, gdy 10% elementu jest widoczne
    });

    // Wybieramy wszystkie elementy, które mają się animować
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    // Mówimy obserwatorowi, aby śledził każdy z tych elementów
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

});