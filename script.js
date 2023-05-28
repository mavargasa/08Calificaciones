function calcularResultado() {
    var calificacion = parseInt(document.getElementById('calificacion').value);

    if (calificacion >= 1 && calificacion <= 10) {
        var mensaje = '';

        if (calificacion < 6) {
            mensaje = 'Reprobado';
        } else if (calificacion >= 6 && calificacion <= 8) {
            mensaje = 'Regular';
        } else if (calificacion === 9) {
            mensaje = 'Bien';
        } else if (calificacion === 10) {
            mensaje = 'Excelente';
        }

        document.getElementById('mensaje').textContent = mensaje;
        document.getElementById('resultado').classList.remove('ventanacoculta');
    } else {
        alert('La calificación debe estar entre 1 y 10');
    }
}
