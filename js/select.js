
//-------------- team selecr

window.fetch('https://pcfy.redberryinternship.ge/api/teams').then(res => res.json()).then(result => {
    result.data.forEach(element => {
        let select = document.querySelector("#selectTeam");
        let newOption = document.createElement("option");
        let optionText = document.createTextNode(element.name);
        
        newOption.appendChild(optionText);
        select.append(newOption);
    })
})


//------------- position select

window.fetch('https://pcfy.redberryinternship.ge/api/positions').then(res => res.json()).then(result => {
    result.data.forEach(element => {
        let select = document.querySelector("#selectPos");
        let newOption = document.createElement("option");
        let optionText = document.createTextNode(element.name);
        
        newOption.appendChild(optionText);
        select.append(newOption);
    })
})



//----------- laptop brand


window.fetch('https://pcfy.redberryinternship.ge/api/brands').then(res => res.json()).then(result => {
    result.data.forEach(element => {
        let select = document.querySelector("#laptopBrand");
        let newOption = document.createElement("option");
        let optionText = document.createTextNode(element.name);
        
        newOption.appendChild(optionText);
        select.append(newOption);
    })
})

//-------- laptop CPU

window.fetch('https://pcfy.redberryinternship.ge/api/cpus').then(res => res.json()).then(result => {
    result.data.forEach(element => {
        let select = document.querySelector("#laptopCpu");
        let newOption = document.createElement("option");
        let optionText = document.createTextNode(element.name);
        
        newOption.appendChild(optionText);
        select.append(newOption);
    })
})