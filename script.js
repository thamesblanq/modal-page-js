const showBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const container = document.querySelector(".container");

showBtn.addEventListener('click', () => {
    container.classList.toggle('show');
    container.style.opacity = 1;
    container.style.display = 'block'; 
})

closeBtn.addEventListener('click', () => {
  container.classList.remove('show');
  container.style.opacity = 0;  
  container.style.display = 'none'; 
})