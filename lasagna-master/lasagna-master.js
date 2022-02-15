// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(minutes) {
  if (minutes === undefined) {
    return "You forgot to set the timer.";
  }
  return minutes == 0 ? "Lasagna is done." : "Not done, please wait.";
}

export function preparationTime(layers, time) {
  if (!time) {
    return layers.length * 2;
  } else {
    return layers.length * time;
  }
}

export function quantities(layers) {
  let layersObj = {
    noodles: 0,
    sauce: 0,
  };
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] == "noodles") {
      layersObj.noodles += 50;
    } else if (layers[i] == "sauce") {
      layersObj.sauce += 0.2;
    }
  }
  return layersObj;
}

export function addSecretIngredient(friendsList, myList) {
  let secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, num) {
  let scaledRecipe = {
    ...recipe,
  };
  for (const item in scaledRecipe) {
    scaledRecipe[item] = scaledRecipe[item] * (num / 2);
  }
  return scaledRecipe;
}
