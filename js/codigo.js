$(function() {
    $('td a').on('click', function(e) {
        //var respuesta = confirm('¿Estás de acuerdo?');
        //if (respuesta) {
        var a = $(this);
        $.liga('pregunta', {msj: '¿Estás seguro?', funcS: function() {
            var href = a.attr('href');
            $.get('index.php'+href, function(resp) {
                if (resp == 1) {
                    $('body').liga('mensaje', 'Operación realizada.');
                    a.closest('tr').fadeOut('slow');
                    var txt = $('#num_reg').text();
                    txt = txt-1;
                    $('#num_reg').text(txt);
                    // borrarlo del selector
                    var id = href.substring(8);
                    console.log(id);
                    $('#algocual option').filter(function(i) {
                        return $(this).attr('value') == id;
                    }).remove();
                } else {
                    $('body').liga('mensaje', 'Error en la operación.');
                    console.log(resp);
                }
            });
        }});
            
        //}
        e.preventDefault();
    });
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        var forma = $(this);
        var action = forma.attr('action');
        $.post(action, forma.serialize(), function(resp) {
            if (resp == 1) {
                $('#div_tabla').load('tabla.php');
                $('body').liga('mensaje', 'Operación realizada');
                var form = forma.get(0);
                form.reset();
                $('#algocual').load('selector.php');
            } else {
                $('body').liga('mensaje', 'Operación no realizada.');
                console.log(resp);
            }
        });
    });
});