$(document).ready(function(){
  //var titulo = document.createElement('br'); 
   $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'php/prueba.php',
      success: function(response){	
	if(response.success){
       		for(var i in response.pisos){
			var titulo = response.pisos[i].titulo;
			var texto = response.pisos[i].descripcion;
			var url = response.pisos[i].ruta;
			var usuario = response.pisos[i].username;
			var contacto = response.pisos[i].contacto;
			var precio = response.pisos[i].precio;
			var lugar = response.pisos[i].lugar;
			//Si no hay imagen
			if(url == null ){
				var div_anuncios = "<div><h3>"+ titulo +"</h3> <p>"+ texto +"</p><p>Precio en euros: "+ precio+ "</p><p> Lugar: "+lugar+"</p><p> Contacto: "+contacto+				"</p><hr></div>";
			}
			//Si hay imagen
			else{				
				var div_anuncios = "<div><div><h3>"+ titulo +"</h3><img src='"+url+"'></div><div id='div_der'> <p>"+ texto +"</p><p>Precio en euros: "+ precio+ "</p><p>					Lugar: "+lugar+"</p><p> Contacto: "+contacto+"</p></div><hr></div>";
			}

			$(div_anuncios).appendTo("#resultado");
			
		}
	}
        else{
           	$('#resultado').append('<p>No ´hay ningún anuncio publicado en la página en este momento</p>');
        }
      } 

   })
});
