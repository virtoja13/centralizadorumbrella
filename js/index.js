$(document).ready(function(){
	
	$('#aRegistrarUsuariosId').click(function (e) {
		ruta = '<li><a href="#">Home</a></li><li><a href="#">Gestión de Usuarios</a></li><li><a href="#">Registrar Usuarios</a></li>';
		$("#divInfoGeneral").hide();
		$("#divRegistrarUsuarios").show();
		$("#h2GestionUsuario").text(" Registrar Usuarios");
		$("#ulRuta").html(ruta);
    });
	
	$('#aConsultarUsuarios').click(function (e) {
		ruta = '<li><a href="#">Home</a></li><li><a href="#">Gestión de Usuarios</a></li><li><a href="#">Consultar Usuarios</a></li>';
		$("#divInfoGeneral").hide();
		$("#divRegistrarUsuarios").show();
		$("#h2GestionUsuario").text(" Consultar Usuarios");
		$("#ulRuta").html(ruta);
    });
	
});