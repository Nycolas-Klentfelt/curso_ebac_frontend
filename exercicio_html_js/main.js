const form = document.getElementById('formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = Number(window.document.getElementById('campoA').value);
    const campoB = Number(window.document.getElementById('campoB').value);

    if (campoB > campoA) {
        alert('Sucesso! O número do campo B é maior que o número do campo A.');
    } else {
        alert('Erro! O número do campo B não é maior que o número do campo A.');
    }
});
