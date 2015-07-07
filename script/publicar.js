$(document).ready(function(){
	$('#boton_publicar').click(function(){
		var form = $('form')[0];
		var formData = new FormData(form);
		$.ajax({
			type: 'POST',
			url: 'php/publicar.php',
		//	data: $('#formPublicar').serialize(),
			data: formData,
			contentType: false,
			processData: false,
			success: function(valor){
				alert(valor);
			} 
		});
		return false;
	});
});

