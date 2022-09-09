const btn = document.querySelector('#btn');
const cep = document.querySelector('#cep');

btn.addEventListener('click', (e) =>{
    const procura = cep.value.replace("-","");
    const options={
        method: 'GET',
        mode: 'cors',
        cache: 'defaut'

    }
    fetch(`https://viacep.com.br/ws/${procura}/json/`)
    .then(response => {response.json()
        .then(data => console.log(data))})
    .catch(e => trataErro())

               
})


function trataErro(){

    return console.log("Erro no processamento da API");
}