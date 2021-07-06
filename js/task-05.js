

const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};
console.log(refs.input);
refs.input.addEventListener('input', onImputChange);

function onImputChange(event) {
    if (refs.input.value === '') {
       return refs.span.textContent = 'незнакомец';
  }
    return refs.span.textContent = event.currentTarget.value;
};

