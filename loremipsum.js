const loremTextElement = document.getElementById('lorem-text');
const generateButton = document.getElementById('generate-btn');
const paragraphsInput = document.getElementById('paragraphs');

const loremIpsumArray = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.`,
    `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.`,
    `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.`,
    `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.`,
    `Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et.`,
    `Mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`
];

generateButton.addEventListener('click', () => {
    const numberOfParagraphs = parseInt(paragraphsInput.value);
    loremTextElement.innerHTML = ''; // Clear previous text

    for (let i = 0; i < numberOfParagraphs; i++) {
        const randomIndex = Math.floor(Math.random() * loremIpsumArray.length);
        const paragraph = document.createElement('p');
        paragraph.textContent = loremIpsumArray[randomIndex];
        loremTextElement.appendChild(paragraph);
    }
});
