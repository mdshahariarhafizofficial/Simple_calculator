function allClear() {
    document.getElementById('display').value = "";
}

function deleteItem() {
    const delItem = document.getElementById('display').value;
    const delValue = delItem.slice(0, -1);
    document.getElementById('display').value = delValue;
}
function calcNumber(newValue) {
    const display = document.getElementById('display');
    display.value += newValue;

}

function result() {
    var a = document.getElementById('display').value;
    var b = eval(a);
    document.getElementById('display').value = b;
}