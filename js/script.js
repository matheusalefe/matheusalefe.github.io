function imprimirCurriculo(){
    window.print()
}

function hoverIn(){
    var mensagem = window.document.getElementById('mensagem')
    mensagem.innerText = 'Clique na foto e imprima o currículo!'
}

function hoverOut(){
    var mensagem = window.document.getElementById('mensagem')
    mensagem.innerText = ''
}