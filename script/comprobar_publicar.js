$(document).ready(function(){
        $('.a_publicar').on('click',function(){
               $.ajax({
                        type: "POST",
                        url: 'php/comprobar.php',
                        success: function(valor){

                                if(valor == 1){
                                        document.location.href = 'publicar.html';
                                }
                                else {
                                        document.location.href = 'no_logueado.html';
                                }

                        }
                })
                return false;

        })
});


