function carregar(){
    let titulo = document.querySelector("h1")
    let mensagem = document.getElementById("msg");
    let foto = document.getElementById("fotinha");
    let data = new Date();
    let hora = data.getHours();

    
    mensagem.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        titulo.innerHTML = "Bom-Dia! ☀️ <br> Tenha um ótimo dia pela frente!"
        foto.src = "manhã.jpeg";
        document.body.style.backgroundColor = "#8db3ff";
    }else if(hora >= 12 && hora <= 18){
        titulo.innerHTML = "Boa-tarde! 🌇 <br> Trabalhando? Almoçando? Estudando? ou voltando para casa?"
        foto.src = "tarde.jpeg"
        titulo.style.color = "gold"
        document.body.style.backgroundColor = "#000079  "
    }else{
        titulo.innerHTML = "Boa-Noite! 🌑  <br> Descanse, amanhã é um novo dia!"
        titulo.style.color = "wheat"
        foto.src = "noite.jpeg"
        document.body.style.backgroundColor = "#00091b"
    }
}
