const btn = document.querySelector('#btn');
const cep = document.querySelector('#cep');


const showData = (result)=>{
 for(const campo in result){
    if(document.querySelector('#'+campo)){
        document.querySelector('#'+campo).value = result[campo]
    }
 }
}

btn.addEventListener('click', (e) =>{
    const procura = cep.value.replace("-","");
  
    fetch(`https://viacep.com.br/ws/${procura}/json/`)
    .then(response => {response.json()
        .then(data => showData(data))})
    .catch(e => trataErro())

               
})


function trataErro(){

    return console.log("Erro no processamento da API");
}