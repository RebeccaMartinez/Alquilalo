$(document).ready(function(){
        $('.a_perfil').on('click',function(){
               $.ajax({
                        type: "POST",
                        url: 'php/comprobar.php',
                        success: function(valor){
				
				if(valor == 1){
					document.location.href = 'perfil.html';					
				}
				else {
					document.location.href = 'no_logueado.html';
				}

                        }
                })
                return false;

        })
});

