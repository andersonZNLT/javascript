const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        //faz requisição assíncrona
        const data = await fetch(BASE_URL);
        const json = await data.json();
        //webpurl é uma chave dentro do json que contem o link da imagem 
        return json.webpurl;

    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    //const que recebe os parametros do <img/> por meio do ID 'cat'
    const catImg = document.getElementById('cat');
    //agora nosso source vai receber o retorno com o link que contem a imagem
    catImg.src = await getCats();
};

// quando houver um click, damos load na imagem
catBtn.addEventListener('click', loadImg);

//vamos colocar uma imagem antes de algém clicar no botão!
loadImg();