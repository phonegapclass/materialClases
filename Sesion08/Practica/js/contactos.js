//Contactos
$(function(){
	$('#cListar').tap(function(){
		LeerContactos();
	});
    
    $('#ncSend').tap(function(){
        nuevoContacto($('#ncNom').val(),$('#ncTel').val(),$('#ncMail').val());
    });
});


// Wait for device API libraries to load
function LeerContactos(){
	//alert();
	document.addEventListener("deviceready", Contactos, false);
}

// device APIs are available
function Contactos() {
	//alert('1');
	// find all contacts with 'Bob' in any name field
	var options = new ContactFindOptions();
	options.filter = "";
    options.mulple = true;
	var fields = ["*"];
	navigator.contacts.find(fields, leidos, onError1, options);
}

// onSuccess: Get a snapshot of the current contacts

function leidos(contacts) {
	//alert(contacts.length);
	if(contacts.length>0)
		$('#cMostrar').html('');
	else
		$('#cMostrar').html('<li>Sin Leer Contactos</li>');
	for (var i = 0; i < contacts.length; i++) {
		//var tel = contacts[i].phoneNumbers[0].value;
		var nombre = contacts[i].displayname || contacts[i].nickname;
		$('#cMostrar').append('<li><a href="tel:00">'+nombre+'</a></li>');
	}
}

// onError: Failed to get the contacts

function onError1(contactError) {
	alert('onError!');
}

//Crear Contactos
function nuevoContacto(nom,tel,mail){
    document.addEventListener("deviceready",function(){
        datosContacto(nom,tel,mail);
    },false);
}
//Crear módulo de nuevo contacto
function datosContacto(nom,tel,mail){
    var contacto = navigator.contacts.create();
    contacto.displayName = nom;
    contacto.nickname = nom;
    var nombre = new ContactName();
    nombre.givenName = nom;
    nombre.familyName = "Prueba";
    contacto.name = nombre;
    var telefonos = [];
    telefonos[0] = new ContactField("home",tel,true);
    contacto.phoneNumbers = telefonos;
    var correos = [];
    correos[0] = new ContactField("home",mail,true);
    contacto.emails = correos;
    
    contacto.save(nuevoCorrecto,nuevoError);
}

function nuevoError(err){
    alert('Error: '+err.code);
}

function nuevoCorrecto(){
    alert('Contacto Creado Satisfactoriamente');
    $('#ncNom').val('');
    $('#ncTel').val('');
    $('#ncMail').val('');
    window.history.back();
}