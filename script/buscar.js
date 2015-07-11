$(document).ready(function(){
  $('#btn_buscar').on('click', function(){
   
   var lugar = document.getElementById('lugar').value;
   var precio = document.getElementById('precio').value;
   if((lugar == "")&&(precio == "")){
	$('#error_buscar').append("<p class='error_p'>Es necesario rellenar al menos uno de los campos <p>")
   }   
   if((lugar != "")||(precio != "")){
	var elem = document.getElementById('div_buscar');
   	elem.parentNode.removeChild(elem);
	   $.ajax({
	      type: 'POST',
	      dataType: 'json',
	      data: {'lugar': lugar, 'precio': precio},
	      url: 'php/buscar.php',
	      success: function(response){	
		if(response.success){
		
			for(var i in response.pisos){
				var titulo = response.pisos[i].titulo;
				var texto = response.pisos[i].descripcion;
				var url = response.pisos[i].ruta;
				var contacto = response.pisos[i].contacto;
				var precio = response.pisos[i].precio;
				var lugar = response.pisos[i].lugar;

				if(url == null){
					var div_bus = "<div><h3>"+ titulo+"</h3><p>"+ texto +"</p><p>Precio en euros: "+ precio +"</p><p> Lugar: "+lugar+"</p><p>Contacto: "+contacto+"</				p><hr></div>";
				}
				else {
					var div_bus = "<div><div><h3>"+ titulo +"</h3><img src='"+url+"'></div><div><p>"+texto+"</p><p>Precio en euros: "+precio+"</p><p>Lugar: "+lugar+"</p><p>Contacto: "+contacto+"</p></div><hr></div>" 
				
				}
				$(div_bus).appendTo("#resultado_buscar");
			}	
		
		}
	   
		else{
		        $('#resultado_buscar').append("<p> No se ha encontrado ningún anuncio que coincida con su busqueda</p>");
		}
	      }
	     })
	return false;
   }
   })
});

