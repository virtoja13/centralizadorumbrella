$(document).ready(function(){
	
	$('#aRegistrarUsuariosId').click(function (e) {
		ruta = '<li><a href="#">Home</a></li><li><a href="#">Gestión de Usuarios</a></li><li><a href="#">Registrar Usuarios</a></li>';
		$("#divInfoGeneral").hide();
		$("#divGestionOp").hide();
		$("#divRegistrarUsuarios").show();
		$("#h2GestionUsuario").text(" Registrar Usuarios");
		$("#ulRuta").html(ruta);
    });
	
	$('#aConsultarUsuarios').click(function (e) {
		ruta = '<li><a href="#">Home</a></li><li><a href="#">Gestión de Usuarios</a></li><li><a href="#">Consultar Usuarios</a></li>';
		$("#divInfoGeneral").hide();
		$("#divGestionOp").hide();
		$("#divRegistrarUsuarios").show();
		$("#h2GestionUsuario").text(" Consultar Usuarios");
		$("#ulRuta").html(ruta);
    });
	
	$('#aOperadores').click(function (e) {
		ruta = '<li><a href="#">Home</a></li><li><a href="#">Gestión de Usuarios</a></li><li><a href="#">Operadores</a></li>';
		$("#divInfoGeneral").hide();
		$("#divRegistrarUsuarios").hide();
		$("#divUsuariosOp").hide();
		$("#divOper").show();
		$("#divGestionOp").show();
		$("#h2GestionOperador").text(" Operadores");
		$("#ulRuta").html(ruta);
    });
	
	$('#aUsuarioXOp').click(function (e) {
		ruta = '<li><a href="#">Home</a></li><li><a href="#">Gestión de Usuarios</a></li><li><a href="#">Usuarios por Operador</a></li>';
		$("#divInfoGeneral").hide();
		$("#divRegistrarUsuarios").hide();
		$("#divOper").hide();
		$("#divUsuariosOp").show();
		$("#divGestionOp").show();
		$("#h2GestionOperador").text(" Usuarios por Operador");
		$("#ulRuta").html(ruta);
    });
	
	
	
	
});