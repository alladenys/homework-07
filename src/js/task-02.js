const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  

  const newIngredient = ingredients.map(ingredient => {
      const item = document.createElement('li');
      item.textContent = ingredient;
      return item;
  });

  const addIngredients = document.querySelector(`#ingredients`);
  addIngredients.append(...newIngredient);
  console.log(addIngredients);

