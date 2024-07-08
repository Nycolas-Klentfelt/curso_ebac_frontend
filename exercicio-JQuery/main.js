
$(document).ready(function(){
    $('#button-1').click(function(){
        $('form').slideDown();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
    
        
        const novaTarefa = $('#add-tarefa').val();
        const novaLinha = $(`
                <li>
                    <label >
                        <input type="checkbox" name="Tarefas" class="checked"  >
                        <span id="item">${novaTarefa}</span>
                    </label>
                </li>
            `);
        $(novaLinha).appendTo('ul');
        $('#add-tarefa').val('');
        $( "#button-3" ).remove( 'li');

    });

        
    //<button type="submit" id="button-3">X</button>
});

