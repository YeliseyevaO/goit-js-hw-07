const categorsEl = document.querySelectorAll('.item');
const categorAmount = categorsEl.length;
console.log(`В списке ${categorAmount} категории.`);
const arrRef = Array.from(categorsEl);
arrRef.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}
Количество элементов: ${item.lastElementChild.children.length}`);
});




