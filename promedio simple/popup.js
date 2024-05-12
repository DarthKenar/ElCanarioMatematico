let id = 2
let addValueBtn = document.getElementById("addValue")
let valuesGroup = document.getElementById("valuesGroup")
addValueBtn.addEventListener("click",()=>{
    id += 1
    valuesGroup.insertAdjacentHTML("afterbegin",`<div class="item-group" id="row${id}"><button class="background-none delete-trigger" type="button" id="delete${id}" value="delete" title="Eliminar item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button><input id="name${id}" type="text"><input class="input-trigger" id="value${id}" type="number" placeholder="Valor"></div>`)
})
function deleteRow(id){
    let row = document.getElementById(`row${id}`)
    row.remove()
};

document.addEventListener('DOMContentLoaded', (event) => {
    let valuesGroup = document.getElementById('valuesGroup');

    // Delegación de eventos
    valuesGroup.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-trigger')) {
            // Extraer el número del id del botón
            let id = event.target.id.slice(6); // "delete" tiene 6 caracteres, por lo que comenzamos a cortar desde el índice 6
            deleteRow(id);
            calculateAverage();
        }
    });

    valuesGroup.addEventListener('input', (event) => {
        if (event.target.classList.contains('input-trigger')) {
            calculateAverage();
        }
    });
});

function calculateAverage() {
    let triggers = document.querySelectorAll(".input-trigger");
    if (triggers.length > 0) {
        let total = 0;
        let totalItems = triggers.length
        triggers.forEach(trigger => {
            let value = parseInt(trigger.value)
            console.log(value)
            if (value) {
                console.log(value)
                total += parseFloat(trigger.value);
            }else{
                totalItems -= 1
            }
        });
        var average = total / totalItems;
    }else{
        var average = 0
    }
    document.getElementById("average").value = average;
}

let triggers = document.querySelectorAll(".input-trigger");
triggers.forEach(trigger => {
    trigger.addEventListener("input", calculateAverage);
});



