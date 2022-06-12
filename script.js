const allClearBtn = document.getElementById('ac');
const result = document.getElementById('result');
const delBtn = document.getElementById('del');

onload();

// All clear button

allClearBtn.addEventListener('click', () => {
    result.value = "";
});

// Delete button
function deleteLast(){
    result.value = result.value.slice(0, -1);
}

// Display zero on refresh

function onload() {
    result.value = "0";
}

// Display value in result area

function display(value) {
    if (result.value === "0") {
        result.value = "";
        result.value += value;
    } else if (result.value === "" || result.value) {
        result.value += value;
    }
}

// To calulate result

function calculate() {
    var displayedValue = result.value;
    var resultValue = eval(displayedValue);
    result.value = resultValue;
}
