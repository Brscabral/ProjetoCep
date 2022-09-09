const btn = document.querySelector('#btn');
const cep = document.querySelector('#cep');

//como os campos da api vêm em um formato objeto de campos semelhantes 
//ao id dos nosso campos. Por isso, o showData captura as respostas retornadas
//no .then, averigua todos os campos dessa resposta e ai podemos manipula-as

const showData = (result)=>{
 for(const campo in result){
    if(document.querySelector('#'+campo)){
        document.querySelector('#'+campo).value = result[campo]
    }
 }
}

btn.addEventListener('click', (e) =>{
    const procura = cep.value.replace("-","");
    //Usando o replace para retirar o traço

    fetch(`https://viacep.com.br/ws/${procura}/json/`)
    .then(response => {response.json()
        .then(data => showData(data))})
    .catch(e => trataErro())

               
})


function trataErro(){    

return alert("Digite um cep valido")

}