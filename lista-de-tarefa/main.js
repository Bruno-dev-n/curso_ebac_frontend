$(document).ready(function() { 
    $('header button') .click(function(){
        $('form').slideDown( );
    });

    $('#reset').click(function(){
        $('form').slideUp();
    });

    $('form').on ('submit', function(e){
        e.preventDefault();

        const novaTarefa =$('#tarefa').val();
        
        const novaLI =$('<li style="display:none;"></li>');
        $(`<a href="#">${novaTarefa}</a>`).appendTo(novaLI);

        $(novaLI).appendTo('ul');
        $(novaLI).fadeIn(2000);
        $('#tarefa').val('');
    })
    $('ul').on('click','a',function(){
        $(this).addClass("li-decoraçao");
    });


});