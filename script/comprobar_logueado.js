
        
               $.ajax({
                        type: "POST",
                        url: 'php/comprobar_logueado.php',
                        success: function(valor){
				
                                if(valor == 1){
					
 
                                        
                                }

				else {
					$('.barra_login').append('<a href="login.html"><span class="glyphicon glyphicon-log-in"></span> Iniciar Sesion </a>');
				}
                        }
                })
                

       


