function borrarForm(e) {
    e.preventDefault();

    for (let item of casilleros){
        item.value = '';
        item.classList.remove('border-danger');
    }
    totalPagar.classList.add('d-none');
    
    for (let item of cards){
            item.classList.remove('border-primary', 'border-success', 'border-warning');
    }
    document.getElementById("totalPagar").innerHTML = `Total a Pagar: $`
}

function checkError() {
    let informacion = false;
    let contador = 0;

    for (let item of casilleros){
        item.value === '' ? item.classList.add('border-danger') : item.classList.remove('border-danger');
        item.value !== '' && contador++;
        formTickets.cantidad.value<1 ? formTickets.cantidad.classList.add('border-danger') : formTickets.cantidad.classList.remove('border-danger');
    }
    
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


    if (contador===5 && formTickets.cantidad.value>0) {        
        informacion = {
            categoriaDescuento: categoriaDescuento,
            pagoTotal: pagoTotal,
        }
        for (let item of casilleros){
            informacion[item.name] = item.value;
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



