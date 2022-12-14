const showError = (errorMsg) => {
  const error = document.createElement('p');
  error.textContent = errorMsg;
  error.classList.add('error');

  const container = document.querySelector('.tweets-container-create');
  container.appendChild(error);

  setTimeout(() => {
    error.remove();
  }, 3000);
};

export default showError;