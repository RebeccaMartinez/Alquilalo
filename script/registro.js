$(document).ready(function(){
        $('#btn_registro').on('click',function(){
                var usu = $('#nombre').val();
                var pass = $('#pass').val();
                var pass2 = $('#pass2').val();
		var email = $('#email').val();
                var url = 'php/registro.php';
                if((usu=="")&&(pass=="")&&(pass2=="")&&(email=="")){
                        document.getElementById("msg1").innerHTML = "Escribe tu nombre de usuario";
			document.getElementById("msg2").innerHTML = "Escribe tu contraseña";
			document.getElementById("msg3").innerHTML = "Es necesario escribir la contraseña de nuevo";
			document.getElementById("msg4").innerHTML = "Escribe aquí tu e-mail";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu!="")&&(pass=="")&&(pass2=="")&&(email=="")){
                        document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "Escribe tu contraseña";
			document.getElementById("msg3").innerHTML = "Es necesario escribir la contraseña de nuevo";
			document.getElementById("msg4").innerHTML = "Escribe aquí tu e-mail";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu=="")&&(pass!="")&&(pass2=="")&&(email=="")){
                        document.getElementById("msg1").innerHTML = "Escribe tu nombre de usuario";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "Es necesario escribir la contraseña de nuevo";
			document.getElementById("msg4").innerHTML = "Escribe aquí tu e-mail";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu=="")&&(pass=="")&&(pass2!="")&&(email=="")){
                        document.getElementById("msg1").innerHTML = "Escribe tu nombre de usuario";
			document.getElementById("msg2").innerHTML = "Escribe tu contraseña";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "Escribe aquí tu e-mail";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu=="")&&(pass=="")&&(pass2=="")&&(email!="")){
                        document.getElementById("msg1").innerHTML = "Escribe tu nombre de usuario";
			document.getElementById("msg2").innerHTML = "Escribe tu contraseña";
			document.getElementById("msg3").innerHTML = "Es necesario escribir la contraseña de nuevo";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu!="")&&(pass!="")&&(pass2!="")&&(email=="")){
                        document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "Escribe aquí tu e-mail";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu!="")&&(pass!="")&&(pass2=="")&&(email!="")){
                        document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "Es necesario escribir la contraseña de nuevo";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu!="")&&(pass=="")&&(pass2!="")&&(email!="")){
                        document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "Escribe tu contraseña";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu=="")&&(pass!="")&&(pass2!="")&&(email!="")){
                        document.getElementById("msg1").innerHTML = "Escribe tu nombre de usuario";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu!="")&&(pass!="")&&(pass2=="")&&(email=="")){
                        document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "Es necesario escribir la contraseña de nuevo";
			document.getElementById("msg4").innerHTML = "Escribe aquí tu e-mail";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu!="")&&(pass=="")&&(pass2=="")&&(email!="")){
                        document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "Escribe tu contraseña";
			document.getElementById("msg3").innerHTML = "Es necesario escribir la contraseña de nuevo";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu=="")&&(pass=="")&&(pass2!="")&&(email!="")){
                        document.getElementById("msg1").innerHTML = "Escribe tu nombre de usuario";
			document.getElementById("msg2").innerHTML = "Escribe tu contraseña";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu=="")&&(pass!="")&&(pass2!="")&&(email=="")){
                        document.getElementById("msg1").innerHTML = "Escribe tu nombre de usuario";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "Escribe aquí tu e-mail";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu=="")&&(pass!="")&&(pass2=="")&&(email!="")){
                        document.getElementById("msg1").innerHTML = "Escribe tu nombre de usuario";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "Es necesario escribir la contraseña de nuevo";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((usu!="")&&(pass=="")&&(pass2!="")&&(email=="")){
                        document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "Escribe tu contraseña";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "Escribe aquí tu e-mail";
			document.getElementById("msg5").innerHTML = "";
		}
		
               
               	if((usu!="")&&(pass!="")&&(pass2!="")&&(email!="")){
			if(pass!=pass2){
				document.getElementById("msg5").innerHTML = "Las contraseñas no coinciden";
				document.getElementById("msg1").innerHTML = "";
				document.getElementById("msg2").innerHTML = "";
				document.getElementById("msg3").innerHTML = "";
				document.getElementById("msg4").innerHTML = "";
			}
			else{
			 $.ajax({
		                type: "POST",
		                url: url,
		                data: $("form").serialize(),
		                success: function(valor){
				
		                        if(valor == 1){
		                                document.location.href = "perfil.html"
		                        }
					else {
						document.getElementById("msg5").innerHTML = "El nombre de usuario no está disponible";
						document.getElementById("msg1").innerHTML = "";
						document.getElementById("msg2").innerHTML = "";
						document.getElementById("msg3").innerHTML = "";
						document.getElementById("msg4").innerHTML = "";
					}
		                        
		                }
		          })
			}
		}
                return false;
        })
});

