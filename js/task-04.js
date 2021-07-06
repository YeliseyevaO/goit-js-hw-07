
const btnMinus = document.querySelector('#counter button[data-action="discriment"]');
const btnPlus = document.querySelector('#counter button[data-action="increment"]');
const valueEl = document.querySelector('#counter span#value');


btnMinus.addEventListener('click', onBtnMinusClick); 

btnPlus.addEventListener('click', onBtnPlusClick);

let counterValue = 0;
function onBtnMinusClick() {
    counterValue -= 1;
    return valueEl.textContent = counterValue;
};
function onBtnPlusClick() {
    counterValue += 1;
    return valueEl.textContent = counterValue;
}