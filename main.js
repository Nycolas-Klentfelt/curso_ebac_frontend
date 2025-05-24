function Veiculo(marca, modelo, anoDeFabricacao) {
    this.marca = marca;
    this.modelo = modelo;
    this.anoDeFabricacao = anoDeFabricacao;
    this.eVeiculo = function(){
        console.log(this.modelo + " é um veiculo");
    }
}

function Carro (marca, modelo, anoDeFabricacao){
    Veiculo.call(this, marca, modelo, anoDeFabricacao);
}

function Moto (marca, modelo, anoDeFabricacao) {
    Veiculo.call(this, marca, modelo, anoDeFabricacao);
}

const carroDoNycolas1 = new Carro ("Chevrolet", "Chevette", 1986);
const carroDoNycolas2 = new Carro ("Renault", "Sandero", 2015);
const motoDoNycolas = new Moto ("Honda", "CG 160 Titan", 2020);

console.log(carroDoNycolas1)
carroDoNycolas1.eVeiculo();