/*Tema 5 Ejercicio 4

Alejandro García 2 DAW
*/

function navegar(url){
    window.open(url);
}

function volverInicio(){
    window.open("./index.html");
}

function mostrarInformacion(){

    let ventanaNueva = window.open("");

    ventanaNueva.document.write("Plataforma: "+navigator.platform+"<br>"+
                                "Online: "+navigator.onLine+"<br>"+
                                "Idioma: "+navigator.language+"<br>"+
                                "Cookies habilitadas: "+navigator.cookieEnabled
                                 );

}