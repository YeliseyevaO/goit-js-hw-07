const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listsEl = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  console.log(listEl)
  listEl.textContent = ingredient;
  return listEl;
}
);

console.log(listsEl);
const ulEl = document.querySelector('#ingredients');
ulEl.append(...listsEl);