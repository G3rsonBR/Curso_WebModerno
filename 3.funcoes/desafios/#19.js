// Criar uma função que receba o código de um protudo.
function pedido(codigo){
    switch(codigo){
        case 100:
            console.log(`Seu pedido é:\n Código - ${codigo}\n Cachorro Quente\n Preço: R$3.00`)
            break;
        case 200:
            console.log(`Seu pedido é:\n Código - ${codigo}\n Hambúrguer Simples\n Preço: R$4.00`)
            break;
        case 300:
            console.log(`Seu pedido é:\n Código - ${codigo}\n Cheeseburguer\n Preço: R$5.50`)
            break;
        case 400:
            console.log(`Seu pedido é:\n Código - ${codigo}\n Bauru\n Preço: R$7.50`)
            break;
        case 500:
            console.log(`Seu pedido é:\n Código - ${codigo}\n Refrigerante\n Preço: R$3.50`)
            break;
        case 600:
            console.log(`Seu pedido é:\n Código - ${codigo}\n Suco\n Preço: R$2.80`)
            break;
        default:
            console.log('Código Inválido!')
            break;
    }
}

for(let x = 100; x <= 700; x = x + 100){
    pedido(x)
    console.log('\n')
}