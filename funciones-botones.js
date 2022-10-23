function borrarForm(e) {
    e.preventDefault();

    formTickets.nombre.value = '';
    formTickets.apellido.value = '';
    formTickets.email.value = '';
    formTickets.cantidad.value = '';
    formCategoria.value = '';
    totalPagar.classList.add('d-none');
    for (let item of cards){
            item.classList.remove('border-primary', 'border-success', 'border-warning');
    }
    document.getElementById("totalPagar").innerHTML = `Total a Pagar: $`
}

function checkError() {
    let informacion = false;

    formTickets.nombre.value  === '' ? formTickets.nombre.classList.add('border-danger') : formTickets.nombre.classList.remove('border-danger');
    formTickets.apellido.value  === '' ? formTickets.apellido.classList.add('border-danger') : formTickets.apellido.classList.remove('border-danger');
    formTickets.email.value === '' ? formTickets.email.classList.add('border-danger') : formTickets.email.classList.remove('border-danger');
    formTickets.cantidad.value  === '' ? formTickets.cantidad.classList.add('border-danger') : formTickets.cantidad.classList.remove('border-danger');
    formTickets.cantidad.value < 1 ? formTickets.cantidad.classList.add('border-danger') : formTickets.cantidad.classList.remove('border-danger');
    formCategoria.value === '' ? formCategoria.classList.add('border-danger') : formCategoria.classList.remove('border-danger');

    const categoriaDescuento = 
    formCategoria.value === '0' && 'Sin descuento' ||
    formCategoria.value === '1' && 'Estudiante' ||
    formCategoria.value === '2' && 'Trainee' ||
    formCategoria.value === '3' && 'Junior'

    const pagoTotal = 
    formCategoria.value === '0' && 200 * formTickets.cantidad.value ||
    formCategoria.value === '1' && 200 * 0.2 * formTickets.cantidad.value ||
    formCategoria.value === '2' && 200 * 0.5 * formTickets.cantidad.value ||
    formCategoria.value === '3' && 200 * 0.85 * formTickets.cantidad.value

    if (formTickets.nombre.value && formTickets.apellido.value && formTickets.email.value && formTickets.cantidad.value>0 && formCategoria.value) {
        informacion = {
            nombre: formTickets.nombre.value,
            apellido: formTickets.apellido.value, 
            email: formTickets.email.value,
            cantidadTickets: formTickets.cantidad.value,
            categoriaDescuento: categoriaDescuento,
            pagoTotal: pagoTotal,
        }
    }

    return informacion;
}


function resumenForm(e) {
    e.preventDefault();
    const completeForm = checkError();
    completeForm && sessionStorage.setItem('resumenFormulario', JSON.stringify(completeForm))
    completeForm && exitoEnvio();
}

botonBorrar.onclick = (e) => { borrarForm(e) }
botonResumen.onclick = (e) => { resumenForm(e) }


