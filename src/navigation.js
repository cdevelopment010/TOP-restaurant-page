import Logo from './logo.png'; 

function navItem(name) {
    const item = document.createElement('li'); 
    item.innerText = name; 
    return item; 
}

function navigation() {

    const container = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');  
    const homeButton = navItem('home');
    const aboutButton = navItem('about');
    const contactButton = navItem('contact');
    homeButton.id='home'; 
    aboutButton.id='about'; 
    contactButton.id='contact'; 

    ul.append(homeButton); 
    ul.append(aboutButton);
    ul.append(contactButton); 
    nav.append(ul); 

    const logo = new Image();
    logo.src = Logo;
    logo.id = 'logo'; 

    container.append(logo); 
    container.append(nav); 
    
    return container; 
}

export default navigation; 