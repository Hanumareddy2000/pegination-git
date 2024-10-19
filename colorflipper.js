const colorBox = document.getElementById('color-box');
const colorBtn = document.getElementById('color-btn');

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1', '#33FFF8'];

colorBtn.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
});
