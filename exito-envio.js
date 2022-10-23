function exitoEnvio () {
    Swal.fire({
        icon: 'success',
        title: 'Formulario enviado!',
        text: 'Hemos recibido la informacion que nos has proporcionado.',
    })

    totalPagar.classList.remove('d-none');

    let resumenFormulario = sessionStorage.getItem('resumenFormulario');
    resumenFormulario = JSON.parse(resumenFormulario);

    document.getElementById("totalPagar").innerHTML = 
        `Resumen de compra <hr>
        -Nombre y Apellido: ${resumenFormulario.nombre} ${resumenFormulario.apellido}<br>
        -Email: ${resumenFormulario.email}<br>
        -Cantidad de Tickets: ${resumenFormulario.cantidadTickets}<br>
        -Descuento: ${resumenFormulario.categoriaDescuento}<br><hr>
        <b>Total a Pagar: $ ${resumenFormulario.pagoTotal}.</b>`
}

