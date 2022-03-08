import avatarImg from './circle-user-solid.svg'; 

function teamMember(col, name, text) {
    const div = document.createElement('div'); 
    const image = document.createElement('div'); 
    const nameBlock = document.createElement('h3'); 
    const textBlock = document.createElement('p'); 

    image.classList.add('person-img'); 
    div.classList.add('person'); 

    nameBlock.innerText = name;
    textBlock.innerText = text;
    image.style.backgroundImage = `url(${avatarImg})`; 
    image.style.backgroundColor = col; 
    nameBlock.classList.add('person-name');
    textBlock.classList.add('person-text');
    
    div.append(image); 
    div.append(nameBlock); 
    div.append(textBlock);

    return div;
}

function contact() {

    const container = document.createElement('div');
    const title = document.createElement('h1'); 
    const map = document.createElement('div');
    const info = document.createElement('div'); 
    const phone = document.createElement('div');
    const address = document.createElement('div');
    const email = document.createElement('div');

    const mapInfo = document.createElement('div'); 
    
    title.innerText = `Contact`; 

    map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73628.78178992936!2d-1.622276098003951!3d54.781734781462475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c2aa525d8b1c1%3A0x678a46d5f522452b!2sDurham!5e0!3m2!1sen!2suk!4v1646741209489!5m2!1sen!2suk" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`

    phone.innerText = 'TEL: 01234 567 890';
    address.innerText = 'Address:\n123 Main Road \nSome Street \nXX7 YY0'
    email.innerText='EMAIL: fake@craigscrazycookies.com'; 

    info.append(phone); 
    info.append(address); 
    info.append(email);
    info.classList.add('contact-info')

    mapInfo.append(map); 
    mapInfo.append(info);
    mapInfo.classList.add('contact-grid');

    container.appendChild(title); 
    container.appendChild(mapInfo); 


    container.classList.add('container'); 
    container.classList.add('container-contact'); 
    
    return container; 
}

export default contact; 