const alunos = [
    {nome: "Stefany", nota: 10.0},
    {nome: "Maria", nota: 4.0},
    {nome: "Nycolas", nota: 6.5},
    {nome: "Lucas", nota: 3.9},
    {nome: "Rosangela", nota: 7.6},
    {nome: "Ronaldo", nota: 4.8},
    {nome: "Leandro", nota: 7.7},
];

const alunosAprovados = alunos.filter(function(item){
    return item.nota >= 6.0;
})

console.log(alunosAprovados)