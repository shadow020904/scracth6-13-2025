const searchBox = document.getElementById('search-box');
const searchIcon = document.getElementById('search-icon');
const closeIcon = document.getElementById('close-icon');
const input = document.getElementById('search-input');

searchIcon.addEventListener('click', () => {
  searchBox.classList.add('active');
  input.style.display = 'inline-block';
  closeIcon.style.display = 'inline-block';
  searchIcon.style.display = 'none';
  input.focus();
});

closeIcon.addEventListener('click', () => {
  input.value = '';
  searchBox.classList.remove('active');
  input.style.display = 'none';
  closeIcon.style.display = 'none';
  searchIcon.style.display = 'inline-block';
});