$(document).ready(function(){
        $('#btn_enviar').on('click',function(){
                var inf = $('#informacion').val();
		if(inf == "")
                        document.getElementById("msg1").innerHTML = "Por favor, rellene el campo de texto";
		else{
			$('#msg1').html('<span class="exito"><strong>Mensaje Enviado</strong></span>');
			$('textarea').val('');
		}
        	return false;
        })
});

