function footer() {

    const container = document.createElement('footer');
    const info = document.createElement('div');
    const github = document.createElement('a'); 
    const top = document.createElement('a'); 

    github.href='https://github.com/cdevelopment010/'; 
    github.innerText = 'Github - @cdevelopment010'; 

    top.href = 'https://www.theodinproject.com/'; 
    top.innerText = 'The Odin Project'

    info.append(github);
    info.append(top); 


    container.appendChild(info); 


    container.classList.add('footer'); 
    
    return container; 
}

export default footer; 