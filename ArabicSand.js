const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');
window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 700;
	if (anchoFondo <= 120) {
		fondo.style.width = anchoFondo + '%';
	}
}
function mostrar_hora() {
	var fecha = new Date();
	var hora = fecha.getHours();
	var min = fecha.getMinutes();
	var seg = fecha.getSeconds();
	document.getElementById('pantalla').innerHTML = hora + ":" + min + ":" + seg;
	// Para poner un cero delante del minuto y mantener dos digitos
	if (min <= 9) min = "0" + min;
	// Para poner un cero delante del segundo y mantener dos digitos
	if ((seg <= 9) && (seg >= 0)) seg = "0" + seg;
}
mostrar_hora();
var intervalo = setInterval(mostrar_hora, 1);