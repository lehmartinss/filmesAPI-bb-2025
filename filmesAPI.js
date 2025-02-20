"use strict"



async function pesquisarFilmes(filme){
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${filme}` 

    const response = await fetch(url)
    const data = await response.json()
    const osFilmes = data.description
    const filmeImg = []
    osFilmes.forEach(function(filme){
        filmeImg.push(filme['#IMG_POSTER'])
    })
       

    console.log (filmeImg)
    return filmeImg
}

function criarImagem(link){
    const sessao = document.getElementById('sessao')
    const novoFilme = document.createElement('img')
    novoFilme.src = link 
    sessao.appendChild(novoFilme)

}

async function preencherFotosDosFilmes (){
    const filmes = document.getElementById('filme').value
    const capaDoFilme = await pesquisarFilmes(filmes)
    const sessao = document.getElementById('sessao')
        
    sessao.replaceChildren('')
    capaDoFilme.forEach(criarImagem)
}

document.getElementById('pesquisar')
        .addEventListener('click', preencherFotosDosFilmes)