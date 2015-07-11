$(document).ready(function(){
        $('#cerrar_sesion').on('click',function(){
               $.ajax({
                        type: "POST",
                        url: 'php/logout.php',
                        success: function(valor){

                                if(valor == 1){
                                        document.location.href = 'home.html';
                                }
                                else {
                                        document.location.href = 'no_logueado.html';
                                }

                        }
                })
                return false;

        })
});
