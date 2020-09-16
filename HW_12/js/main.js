const BASE = 'http://swapi.dev/api/';

const characterButton = document.getElementById('characterButton');
const characterForm = document.getElementById('characterForm')
let charactersInfoArr = [];

characterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const episode = +event.target[1].value;
    getPeopleInfo(episode).then(() => {

        const characters = document.querySelector('.characters');
        while (characters.firstChild) {
            characters.removeChild(characters.firstChild);
        }
        charactersInfoArr.forEach((element) => {
            axios.get(element.replace('http', 'https')).then((result) => {
                const charactersElement = document.createElement('div');
                charactersElement.className = 'charactersElement';
                charactersElement.innerHTML = `
                    <img src="./img/characters/${getCharactersPictures(result.data.url)}.jpg" alt="">
                    <h3>${result.data.name}</h3>
                    <h4>${result.data.birth_year}</h4> 
                    <h4>${generateGenderIcon(result.data.gender)}</h4>
                    `;
                characters.append(charactersElement);
            });
        });
    });
})


const getPeopleInfo = (episode) => {
    
    return axios.get(BASE + `films/${episode}/`)
        .then((res) => {

            charactersInfoArr = res.data.characters;
        });
}

const getCharactersPictures = (charactersUrl) => parseInt(charactersUrl.replace(/[^\d]/g, ''));

const generateGenderIcon = (gender) => {
    switch (gender) {
        case 'male':
            return `<i class="fas fa-mars"></i>`
            break;
        case 'female':
            return `<i class="fas fa-venus"></i>`
            break;
        case 'n/a':
            return `<i class="fas fa-genderless"></i>`
            break;
    }
}

//Відображення планет

let planetList = [];
const planetButton = document.getElementById('planetButton');

const getPlanetList = () => {
    return axios.get(BASE + 'planets/')
        .then((result) => {
            planetList = result.data.results;
        })
}

planetButton.addEventListener("click", (event) => {
    getPlanetList().then(() => {
        const characters = document.querySelector('.characters');
        while (characters.firstChild) {
            characters.removeChild(characters.firstChild)
        }

        planetList.forEach(function(element) {
            const planetsElement = document.createElement('div');
            planetsElement.className = 'planetsElement';
            planetsElement.innerHTML = `
                    <img src="./img/planets/${getCharactersPictures(element.url)}.jpg" alt="">
                    <h3>${element.name}</h3>
                    `;
                    characters.append(planetsElement);
        });
    });
});