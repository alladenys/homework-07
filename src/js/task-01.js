const countOfAllCategories = document.querySelectorAll('.item');
console.log(`В списке ${countOfAllCategories.length} категории.`);
countOfAllCategories.forEach(element => {
    console.log(`Категория ${element.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${element.lastElementChild.children.length}`);
});