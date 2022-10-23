function cardOver(card) {
    card.classList.add('alert');

}
function cardLeave(card) {
    card.classList.remove('alert');
}
function cardClick(card) {
    card.ariaChecked = true;

    card === cardEstudiante && card.classList.add('border-primary');
    card === cardTrainee && card.classList.add('border-success');
    card === cardJunior && card.classList.add('border-warning');

    formCategoria.value = 
        card.id === 'cardEstudiante' && '1' ||
        card.id === 'cardTrainee' && '2' ||
        card.id === 'cardJunior' && '3'

    for (let item of cards){
        if (item.id !== card.id) {
            item.classList.remove('border-primary', 'border-success', 'border-warning');
            item.ariaChecked = false;
        }
    }

    }

function asignarEventos(card) {
    card.addEventListener('mouseover', () => cardOver(card));
    card.addEventListener('mouseleave', () => cardLeave(card));
    card.addEventListener('click', () => cardClick(card));
}

asignarEventos(cardEstudiante);
asignarEventos(cardTrainee);
asignarEventos(cardJunior);

