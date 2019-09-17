export { addSuccessClass, addErrorClass, clearInputs };

// Function for adding 'successful' className to HTML element
function addSuccessClass(element) {
  if (element.classList.contains('withError')) {
    element.classList.remove('withError');
  }

  element.classList.add('successful');
}

// Function for adding 'withError' className to HTML element
function addErrorClass(element) {
  if (element.classList.contains('successful')) {
    element.classList.remove('successful');
  }

  element.classList.add('withError');
}

// Clear inputs function
function clearInputs(idsArr) {
  idsArr.forEach(id => document.querySelector(id).value = '');
}