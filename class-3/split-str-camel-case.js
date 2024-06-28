// camelize("background-color") == 'backgraundColor'
// camelize("list-style-image") == 'listStyleImage'
// camelize("-moz-transition") == 'MozTransition'

// Use split to split the array and then transform it and join back to a string

function camelize(str) {
  let newStr = str.split("-");
  newStr = newStr.map((word, index) =>
    index === 0 ? word : word[0].toUpperCase() + word.slice(1).toLowerCase()
  );

  newStr = newStr.join("");

  console.log(newStr);
}

camelize("background-color-INFo-boxy-puppy");
