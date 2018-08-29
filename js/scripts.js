// ocultar la barra de navegación primaria
$(document).ready(function () {


   // $("#botonNavOculta").on("click", function () {
  //      $('#navOculta').toggle();
 //   });

    $('botonNavOculta.toggle').on('click',function() {
        if ($('navOculta.hideMe ').is('[hidden]')) {
            $('navOculta.hideMe ').removeAttr('hidden');
        } else {
            $('navOculta.hideMe ').attr('hidden','');
        }
    });


});


