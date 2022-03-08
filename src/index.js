import home from './home.js'; 
import navigation from './navigation.js'; 
import about from './about.js';
import contact from './contact.js';
import footer from './footer.js';
import './style.css'; 



init(); 

function clearDiv() {
    document.querySelector('#content').innerHTML = '';

}

(function manageBtns() {

    const logo = document.querySelector('#logo'); 
    logo.addEventListener('click', function() {
        redirect(home); 
        manageBtns(); 
    });

    const homeButton = document.querySelector('#home'); 
    homeButton.addEventListener('click', function() {
        redirect(home); 
        manageBtns(); 
    });

    const aboutButton = document.querySelector('#about'); 
    aboutButton.addEventListener('click', function() {
        redirect(about); 
        manageBtns()
    });

    const contactButton = document.querySelector('#contact'); 
    contactButton.addEventListener('click', function() {
        this.classList.add('active'); 
        redirect(contact); 
        manageBtns();
    });
})(); 

function init() {
    clearDiv(); 
    document.querySelector('#content').append(navigation()); 
    document.querySelector('#content').append(home());  
    document.querySelector('#content').append(footer());
    document.querySelector('#home').classList.add('active'); 
}

function redirect(page) {
    clearDiv(); 
    document.querySelector('#content').append(navigation()); 
    document.querySelector('#content').append(page());
    document.querySelector('#content').append(footer());
    if (page==home) {
        document.querySelector('#home').classList.add('active'); 
    } else if (page==about) {
        document.querySelector('#about').classList.add('active'); 
    } else {
        document.querySelector('#contact').classList.add('active'); 
    }
}
