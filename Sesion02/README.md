[Sesión 2](http://www.cenet.mx/) - Primeros pasos con Phonegap
==================================================

Phonegap provee de una API en JavaScript para facilitarnos el acceso al dispositivo móvil.

Temas por ver
--------------------------------------

- Eventos en Phonegap
- API dialogs de Phonegap
- API device de Phonegap
- Conexión a un servidor externo


Practica de Hotel CENET
--------------------------------------

Agregaremos algunas funcionalidades a la pantalla de Registro de Usuario (#registro), se requiere obtener los datos de nombre, email y teléfono después de haber pulsado el botón de registrar, enviar una alerta de notificación en caso de que no estén llenos los campos y enviar los datos a un servidor esperando una respuesta del mismo y, en caso de ser satisfactorio, mostrar una notificación de alerta junto con una notificación sonora.


¿Qué necesitamos para Realizar la funcionalidad de esta práctica?
--------------------------------------

Para la obtención de los datos de nombre, email y teléfono utilizaremos lo siguiente:

1. Breve introducción a [jQuery](http://jquery.com/).
2. [Selectoores](http://api.jquery.com/category/selectors/) con [jQuery](http://jquery.com/).
3. Método [`.tap()`](http://api.jquerymobile.com/tap/) de [jQueryMobile](http://jquerymobile.com/).
4. Método [`.val()`](http://api.jquery.com/val/) de [jQuery](http://jquery.com/).

Para mostrar las alertas de notificación, ocuparemos la librería de phonegap para el acceso a la interfaz de alertas del dispositivo de la siguiente manera:

1. Breve introducción a [PhoneGap](http://phonegap.com/).
2. Implementación del evento [deviceready](http://docs.phonegap.com/en/3.5.0/cordova_events_events.md.html#deviceready) de [PhoneGap](http://phonegap.com/).
3. Implementación de la API [dialogs](https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md) (método alert) de [PhoneGap](http://phonegap.com/).

Para enviar los datos al servidor vamos a hacer uso de la API de ajax que tiene jQuery:

1. Enviar variables capturadas, de nombre, email y teléfono, a través del método [`$.ajax()`](http://api.jquery.com/jQuery.ajax/) de [jQuery](http://jquery.com/).
2. Apuntar la propiedad `url:` a `http://carlos.igitsoft.com/apps/test.php`.
3. Obtener respuesta del servidor con método `.done()` de [jQuery](http://jquery.com/).


¿Cómo compilar la actualización de tu aplicación en la nube?
----------------------------

Compilando la aplicación

1. Seleccionar el repositorio creado (Doble Click)
2. Entrar al programa de Github y verificar cambios en nuestro repositorio
3. Escribir un "Summary" y dar click en el botón "Commit"
4. Sincronizar el repositorio con la nueva versión

`Para Windows`

- 4.1. Presionar el botón "sync" (arriba a la derecha)

`Para Todos`

5. Verificar en la página de [Github](https://github.com/) que el repositorio contenga todos nuestros archivos modificados
6. Entrar al sitio de [PhoneGap Build](https://build.phonegap.com/)
7. Seleccionar nuestra aplicación anteriormente compilada (HotelCenet).
10. Presionar el botón "Update code" y de los botones emergentes presionar "Pull latest".
11. Puede descargarse la aplicación en el dispositivo con el código QR


Sitios Visitados en la Sesión
----------------------------

- [www.phonegap.com](http://www.phonegap.com/)
- [www.jquery.com](http://www.jquery.com/)
- [www.jquerymobile.com](http://www.jquerymobile.com/)
- [www.github.com](https://www.github.com/)
- [https://build.phonegap.com](https://build.phonegap.com/)

`Por: Carlos Celma Tavera`