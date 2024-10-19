const reviewInput = document.getElementById('review-input');
const submitBtn = document.getElementById('submit-btn');
const reviewsContainer = document.getElementById('reviews');

submitBtn.addEventListener('click', () => {
    const reviewText = reviewInput.value;

    if (reviewText) {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.textContent = reviewText;

        reviewsContainer.appendChild(reviewDiv);
        reviewInput.value = ''; // Clear input
    } else {
        alert('Please enter a review!');
    }
});
