// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("diviceready",function(){
		$('#sonar').tap(function(){
			navigator.notification.beep(2)
		}); //tap sonar
		$('vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		}); //tap vibrar
    },false); //cierre del diveready
}); //cierre del ready
			
