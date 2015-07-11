$(document).ready(function(){
	$('#boton_publicar').click(function(){
		var form = $('form')[0];
		var formData = new FormData(form);
		var titulo = $('#titulo').val();
		var precio = $('#precio').val();
		var lugar = $('#lugar').val();
		var contacto = $('#contacto').val();
		
		if((titulo=="")&&(precio=="")&&(lugar=="")&&(contacto=="")){
			document.getElementById("msg1").innerHTML = "Es necesario poner un título";
			document.getElementById("msg2").innerHTML = "El precio de la vivienda es necesario";
			document.getElementById("msg3").innerHTML = "Es necesario poner donde está ubicada la vivienda ";
			document.getElementById("msg4").innerHTML = "Debe proporcionar informacion de contacto (email/tlf...)";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo!="")&&(precio=="")&&(lugar=="")&&(contacto=="")){
			document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "El precio de la vivienda es necesario";
			document.getElementById("msg3").innerHTML = "Es necesario poner donde está ubicada la vivienda ";
			document.getElementById("msg4").innerHTML = "Debe proporcionar informacion de contacto (email/tlf...)";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo=="")&&(precio!="")&&(lugar=="")&&(contacto=="")){
			document.getElementById("msg1").innerHTML = "Es necesario poner un título";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "Es necesario poner donde está ubicada la vivienda ";
			document.getElementById("msg4").innerHTML = "Debe proporcionar informacion de contacto (email/tlf...)";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo=="")&&(precio=="")&&(lugar!="")&&(contacto=="")){
			document.getElementById("msg1").innerHTML = "Es necesario poner un título";
			document.getElementById("msg2").innerHTML = "El precio de la vivienda es necesario";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "Debe proporcionar informacion de contacto (email/tlf...)";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo=="")&&(precio=="")&&(lugar=="")&&(contacto!="")){
			document.getElementById("msg1").innerHTML = "Es necesario poner un título";
			document.getElementById("msg2").innerHTML = "El precio de la vivienda es necesario";
			document.getElementById("msg3").innerHTML = "Es necesario poner donde está ubicada la vivienda ";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo!="")&&(precio!="")&&(lugar!="")&&(contacto=="")){
			document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "Debe proporcionar informacion de contacto (email/tlf...)";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo!="")&&(precio!="")&&(lugar=="")&&(contacto!="")){
			document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "Es necesario poner donde está ubicada la vivienda ";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo!="")&&(precio=="")&&(lugar!="")&&(contacto!="")){
			document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "El precio de la vivienda es necesario";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo=="")&&(precio!="")&&(lugar!="")&&(contacto!="")){
			document.getElementById("msg1").innerHTML = "Es necesario poner un título";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo=="")&&(precio=="")&&(lugar!="")&&(contacto!="")){
			document.getElementById("msg1").innerHTML = "Es necesario poner un título";
			document.getElementById("msg2").innerHTML = "El precio de la vivienda es necesario";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo!="")&&(precio=="")&&(lugar=="")&&(contacto!="")){
			document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "El precio de la vivienda es necesario";
			document.getElementById("msg3").innerHTML = "Es necesario poner donde está ubicada la vivienda ";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo!="")&&(precio!="")&&(lugar=="")&&(contacto=="")){
			document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "Es necesario poner donde está ubicada la vivienda ";
			document.getElementById("msg4").innerHTML = "Debe proporcionar informacion de contacto (email/tlf...)";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo=="")&&(precio!="")&&(lugar!="")&&(contacto=="")){
			document.getElementById("msg1").innerHTML = "Es necesario poner un título";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "Debe proporcionar informacion de contacto (email/tlf...)";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo=="")&&(precio!="")&&(lugar=="")&&(contacto!="")){
			document.getElementById("msg1").innerHTML = "Es necesario poner un título";
			document.getElementById("msg2").innerHTML = "";
			document.getElementById("msg3").innerHTML = "Es necesario poner donde está ubicada la vivienda ";
			document.getElementById("msg4").innerHTML = "";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo!="")&&(precio=="")&&(lugar!="")&&(contacto=="")){
			document.getElementById("msg1").innerHTML = "";
			document.getElementById("msg2").innerHTML = "El precio de la vivienda es necesario";
			document.getElementById("msg3").innerHTML = "";
			document.getElementById("msg4").innerHTML = "Debe proporcionar informacion de contacto (email/tlf...)";
			document.getElementById("msg5").innerHTML = "";
		}
		if((titulo!="")&&(precio!="")&&(lugar!="")&&(contacto!="")){
		$.ajax({
			type: 'POST',
			url: 'php/publicar.php',
		//	data: $('#formPublicar').serialize(),
			data: formData,
			contentType: false,
			processData: false,
			success: function(valor){
				if(valor == "true"){
					$('#msg5').html('<span class="bien_p">Anuncio Publicado</span>');
					document.getElementById("msg1").innerHTML = "";
					document.getElementById("msg2").innerHTML = "";
					document.getElementById("msg3").innerHTML = "";
					document.getElementById("msg4").innerHTML = "";
					$('#titulo').val('');
					$('#precio').val('');
					$('#lugar').val('');
					$('#contacto').val('');
					$('#informacion').val('');
					$('#imagen').val('');
				}
				else {
					document.getElementById("msg5").innerHTML = "Error al publicar el anuncio. Recuerda que la foto tiene que ser jpg y tener un tamaño máximo de 400K";
					document.getElementById("msg1").innerHTML = "";
					document.getElementById("msg2").innerHTML = "";
					document.getElementById("msg3").innerHTML = "";
					document.getElementById("msg4").innerHTML = "";
				}	
			} 
		});
		}
		return false;
	});
});

