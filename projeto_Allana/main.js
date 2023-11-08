// conexão com elementos HTML
// Encapsulando os elementos em uma variável

const filter = document.getElementById('filter');
// Formulário para add item
const form = document.getElementById('addForm');
//  Lista para receber novos itens adicionados
const list = document.getElementById('items');

filter.addEventListener('keyup', function(){
  alert('VI VOCÊ DIGITANDO... SE LIGA, HEIN')
});

form.addEventListener('submit', function(){
    alert('Enviado com sucesso! hehehe')
});

list.addEventListener('click', function(){
    alert('Item excluído!')
});