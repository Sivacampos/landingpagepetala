

function sendwhatsapp(){
    var whatsapp = "5571981308544";

    var name = document.querySelector('.name').value;
    var phone = document.querySelector('.phone').value;
    var email = document.querySelector('.email').value;
    var sevices = document.querySelector('.sevices').value;

    var url = "http://wa.me/"+whatsapp+"?text="
    +"*Nome :* " +name+"%0a"
    +"*Telefone :* " +phone+"%0a"
    +"*Email :* " +email+"%0a"
    +"*Seviços :* " +sevices+"%0a"
    
    window.open(url, '_blank').focus();
}