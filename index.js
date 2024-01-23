let conteudo = document.querySelector('#conteudo')
let valores = document.querySelector('#valor')
let chaves = document.querySelector('#chave')
let button = document.querySelector('#button')
let input = document.querySelector('#input')

button.addEventListener('click', () => {
    fetch(`https://v6.exchangerate-api.com/v6/15dd2ea50392f8c00658fa5f/latest/${input.value}`)
    .then((response) => response.json())
    .then((data)  => {
        const respostas = Object.entries(data.conversion_rates)
        const mapeandoEntradas = respostas.map((item) => {
             const novaDiv = document.createElement('div')
             novaDiv.innerText = item[0] + ':' + item[1]
             novaDiv.id = 'novaDiv'
             conteudo.appendChild(novaDiv)
        })
        
        

        console.log('a',mapeandoEntradas)
    })
})