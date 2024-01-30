const form = document.getElementById('form');
const login = document.getElementById('campoB');
const senha = document.getElementById('campoA');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e){
    
    let campob = document.getElementById('campoB').value;
    let campoa = document.getElementById('campoA').value;
    if(campob > campoa){
        mensagem.style.border = '4px solid green';
        mensagem.style.display = 'block';
        document.getElementById('mensagem').innerHTML = "Parabens Você validou o Formulario!";}
        else{
            mensagem.style.border = '4px solid red';
            mensagem.style.display = 'block';
            document.getElementById('mensagem').innerHTML = "Você não validou o Formulario try now!";
        }
        
    }
    
)


