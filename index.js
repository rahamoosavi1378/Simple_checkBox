let checkbox = document.getElementsByClassName('checkbox');
let checkbox_input = document.querySelectorAll('.checkbox > input[type="checkbox"]');

for (let i = 0; i < checkbox.length; i++) {
    if (checkbox_input[i].checked) {
        checkbox[i].classList.toggle('checked');
    }
    checkbox[i].addEventListener('click', () => {
        checkbox[i].classList.toggle('checked');
        console.log(checkbox_input[i].toggleAttribute('checked'));
    });
}