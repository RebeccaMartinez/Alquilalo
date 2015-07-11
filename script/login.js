$(document).ready(function(){
	$('#submit_login').on('click',function(){
		var usu = $('#nombre').val();
		var pass = $('#pass').val();
		var url = 'php/ejemplo_login2.php';
		if((usu == "")&&(pass == "")){
			document.getElementById("msg").innerHTML = "Escribe tu nombre de usuario";
			document.getElementById("masg").innerHTML = "Escribe tu contraseña";
		}
		if((usu != "")&&(pass == "")){
			document.getElementById("msg").innerHTML = "";
			document.getElementById("masg").innerHTML = "Escribe tu contraseña";
		}
		if((usu == "")&&(pass != "")){
			document.getElementById("msg").innerHTML = "Escribe tu nombre de usuario";
			document.getElementById("masg").innerHTML = "";
		}
		if(pass != "" && usu != ""){		
		$.ajax({
			type: "POST",
			url: url,
			data: 'usu='+ usu + '&pass='+ pass,
			success: function(valor){
				if(valor == 1){
					document.location.href = 'perfil.html';	
				}
				else {
					$('#error_login').append("<p class='error_p'>Nombre de usuario o contraseña incorrecta<p>")
					document.getElementById("msg").innerHTML = "";
					document.getElementById("masg").innerHTML = "";
				}
			
				
			}  
		})
		return false;
		}
	})
});
