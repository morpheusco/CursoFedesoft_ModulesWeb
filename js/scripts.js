// ocultar la barra de navegación primaria
$(document).ready(function () {

    $('botonNavOculta.toggle').on('click', function () {
        if ($('navOculta.hideMe ').is('[hidden]')) {
            $('navOculta.hideMe ').removeAttr('hidden');
        } else {
            $('navOculta.hideMe ').attr('hidden', '');
        }
    });

    window.onscroll = function () {
        flotarImagenes()
    };

    function flotarImagenes() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("imgLeft").className = "float-left";
            document.getElementById("imgRight").className = "float-right";                        
        }
        if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
            document.getElementById("imgLeft").className = "float-right";
            document.getElementById("imgRight").className = "float-left";
        }
        if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
            document.getElementById("imgLeft").className = "float-left";
            document.getElementById("imgRight").className = "float-right";            
        }
    };

});