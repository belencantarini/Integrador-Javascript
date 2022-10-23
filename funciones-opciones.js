function categoriaSeleccionada () {
    formCategoria.value === '1' && cardClick(cardEstudiante);
    formCategoria.value === '2' && cardClick(cardTrainee);
    formCategoria.value === '3' && cardClick(cardJunior);
    
    if(formCategoria.value === '0') {
        for (let item of cards){
            item.classList.remove('border-primary', 'border-success', 'border-warning');
            item.ariaChecked = false;
        }
    }

}


formCategoria.addEventListener('change', categoriaSeleccionada);