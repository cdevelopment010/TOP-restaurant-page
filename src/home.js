function cookie(col, title, text) {
    const cookieBlock = document.createElement('div')
    const cookie = document.createElement('div');
    const textBlock = document.createElement('p')
    const cookieTitle = document.createElement('h2'); 
    cookie.classList.add('cookie-img');


    cookie.style.backgroundColor = col; 
    textBlock.innerText = text; 
    cookieTitle.innerText = title; 
    cookieBlock.appendChild(cookie);
    cookieBlock.appendChild(cookieTitle);  
    cookieBlock.appendChild(textBlock); 
    cookieBlock.classList.add('cookie'); 
    return cookieBlock; 

}

function offer() {
    const div = document.createElement('div'); 
    const title = document.createElement('div');
    const subTitle = document.createElement('div'); 
    const subtitleNum1 = document.createElement('span');
    const subtitleNum2 = document.createElement('span');

    subtitleNum1.classList.add('offer-callout');
    subtitleNum2.classList.add('offer-callout');

    subtitleNum1.innerText = '6';
    subtitleNum2.innerText = '4';

    title.innerText = 'Have we got something special for you!'; 
    subTitle.append(subtitleNum1); 
    subTitle.append(' cookies for the price of ');
    subTitle.append(subtitleNum2); 
    div.classList.add('offer'); 
    div.append(title)
    div.append(subTitle); 


    return div; 
}

function home() {

    const container = document.createElement('div');
    const title = document.createElement('h1'); 
    const cta = document.createElement('p');
    const cookies = document.createElement('div');  

    title.innerText = `Craig's Crazy Cookies`; 

    cta.append("Do you enjoy cookies as much as we do?"); 
    cta.append(document.createElement('br'));
    cta.append("Visit today to find your perfect cookie");
    cta.classList.add('cta'); 
    const cookie1 = cookie('#84563C','Sugar Rush', 'Filled with sweet treats, sugar rush will give you a boost of energy lasing all day long! (parents beware)'); 
    const cookie2 = cookie('#BD8C61','Chocolate Meltdown', 'Chocolate, chocolate and more chocolate! Do you think you can handle it?')
    const cookie3 = cookie('#5A2C22','The Dunker', 'Extremely thick and dunkable, this cookie is the perfect companion for a cuppa tea. ')

    cookies.classList.add('cookies'); 
    cookies.appendChild(cookie1);
    cookies.appendChild(cookie2);
    cookies.appendChild(cookie3);

    

    container.appendChild(title); 
    container.appendChild(cta); 
    container.appendChild(offer()); 
    container.appendChild(cookies); 


    container.classList.add('container'); 
    
    return container; 
}

export default home; 