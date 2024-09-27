$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true
    });
    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(XX) XXXXX-XXXX'
    });
    $('#cpf').mask('000.000.000-0')
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
            },
            telefone:{
                required:true
            },
            cpf:{
                required:true
            },
            endereco:{
                required:true
            },
            cep:{
                required:true
            }
        },
        messages: {
            nome:'Por favor, insira seu nome',
            telefone:'Por favor, insira seu telefone',
            email:'Por favor, insira seu email',
            cpf:'Por favor, insira seu CPF',
            endereco:'Por favor, insira seu endereço',
            cep:'Por favor, insira seu CEP'
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
