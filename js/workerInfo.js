// -----------------worker & laptop info

const workerInfo = document.querySelector('.workerInfo');
const laptopInfo = document.querySelector('.laptopInfo');
const workerInfoPage = document.querySelector('.workerInfoPage');
const laptopInfoPage = document.querySelector('.laptopInfoPage');
const buttonNext = document.querySelector('.buttonNext');
const backBtn = document.querySelector('.backBtn');

const switchActiveTab = (tabName) => {
    if(tabName){
        workerInfo.classList.add('underline')
        laptopInfo.classList.remove('underline')
    } else {
        workerInfo.classList.remove('underline')
        laptopInfo.classList.add('underline')
    }
}

workerInfo.addEventListener('click', () => {
    switchActiveTab("worker")
    laptopInfoPage.style.display = 'none'
    workerInfoPage.style.display = 'block';
})

laptopInfo.addEventListener('click', () => {
    switchActiveTab()
    workerInfoPage.style.display = 'none';
    laptopInfoPage.style.display = 'block';
})


buttonNext.addEventListener('click', (e) => {
    e.preventDefault()
    switchActiveTab()
    workerInfoPage.style.display = 'none';
    laptopInfoPage.style.display = 'block';
})

backBtn.addEventListener('click', (e) => {
    e.preventDefault()
    switchActiveTab("employee")
    laptopInfoPage.style.display = 'none'
    workerInfoPage.style.display = 'block';
})



function createError(element) {
    element.classList.add("error");
}

function removeError(element) {
    element.classList.remove("error");
}


//------------ input name & surname

function validateName(input) {
    let regex = /[^ა-ჰ]/gi;

    input.value = input.value.replace(regex, "");
    if  (input.value.length <= 1)
         createError(input);
    else removeError(input);
};


//------------ select mail & phone number



const validateMail = (e) => {
    if (!e.value.endsWith("@redberry.ge") || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value)) return createError(e);
    removeError(e);
}


const validateNumber = (e) => {
    let regex = /^(\+?995)(79\d{7}|5\d{8})$/;

    if (e.value.match(regex)) return removeError(e);
    else if (e.value = '') return removeError(e);
    createError(e);
}




//--------------------------LAPTOP INFO



//--------- laptop name

function laptopName(input) {
    let regex = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;
    

    if (input.value.match(regex)) return removeError(input);
    return createError(input);
};

//-------- cpu core & flow & ram & laptop price

function cpuCoresFlow(input) {
    let regex = /[^0-9]/

    if (!input.value.match(regex)) return removeError(input);
    return createError(input);
}