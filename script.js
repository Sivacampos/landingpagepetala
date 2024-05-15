

function sendwhatsapp(){
    var whatsapp = "5571981308544";

    var name = document.querySelector('.name').value;
    var phone = document.querySelector('.phone').value;
    var email = document.querySelector('.email').value;
    var sevices = document.querySelector('.sevices').value;

   
    var url = "http://wa.me/"+whatsapp+"?text="
    +"Olá Pétala, vi seu anúncio e gostaria de mais informações!"
    +"*Nome :* " +name+"%0a"
    +"*Telefone :* " +phone+"%0a"
    +"*Email :* " +email+"%0a"
    +"*Seviços :* " +sevices+"%0a"
    +"Em breve entrarei em contato!"


    window.open(url, '_blank').focus();
    
}

/*let url = "https://api.whatsapp.com/send?phone=5511989126556&text= Bem vindo a Corretora Sousa -->> 
%0A Qual é o seu nome? %0A " + cliente + ""
%0A Qual o seu sobrenome ?%0A " + sobrenome +"" 
%0A Qual o seu e-mail %0A " + email + ""
%0A Qual é o seu telefone ? %0A " + telefone + ""
%0A Uma cotação para quantas vidas ? %0A" + exampleFormControlSelect1 + "*/


const planosaude = document.querySelector('#planoSaude')
const modal = document.querySelector('dialog')
const buttonClose = document.querySelector("dialog button")
let status = 'fechado'


planosaude.onclick = function () {
    if (status == 'fechado') {
     modal.style.display = "block";
     status = 'aberto'
     console.log('abrimos')
    }
    else {
        modal.style.display = "none"
        status = 'fechado'
        console.log('fechamos')
    }
    
}

/*planosaude.addEventListener('click', () => {
    modal.show();
})*/