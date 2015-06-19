$(document).ready(function(){
	$('#submit_login').on('click',function(){
		var usu = $('#nombre').val();
		var pass = $('#pass').val();
		var url = 'php/ejemplo_login2.php';
		
		$.ajax({
			type: "POST",
			url: url,
			data: 'usu='+ usu + '&pass='+ pass,
			success: function(valor){
				if(valor == 1){
					document.location.href = 'perfil.html';	
				}
				else {
					document.location.href = 'home.html';
				}
				alert(valor);
				
			}  
		})
		return false;
	})
});
