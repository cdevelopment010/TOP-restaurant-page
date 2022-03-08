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

function about() {

    const container = document.createElement('div');
    const title = document.createElement('h1'); 
    const intro = document.createElement('p');
    const team = document.createElement('div');  
    const teamTitle = document.createElement('h2'); 
    
    title.innerText = `About!`; 

    intro.innerText = "Here are Craig's Crazy Cookies, we are mad about cookies! We experiment to bring you the best combination of flavours possible, and we personally try each and every cookie!"

    const person1 = teamMember('#28e383', 'Alice', 'I love baking cookies, and I love sharing them with people to bring a smile to their faces!'); 
    const person2 = teamMember('#9118be', 'Bob', 'Pro taster. ')
    const person3 = teamMember('#1411ce', 'Craig (AKA the boss)', 'Cookies are a way of life and help in every situation. ')

    teamTitle.innerText = 'Meet the team'; 

    team.classList.add('team'); 
    team.appendChild(teamTitle); 
    team.appendChild(person1);
    team.appendChild(person2);
    team.appendChild(person3);


    container.appendChild(title); 
    container.appendChild(intro); 
    container.appendChild(team); 


    container.classList.add('container'); 
    container.classList.add('container-about'); 
    
    return container; 
}

export default about; 