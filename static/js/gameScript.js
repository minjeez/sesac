// selecting card feature
document.addEventListener('DOMContentLoaded', function () {
    const basePath = '../static/taro-img/';
    const cards = [
        'cup.png',
        'devil.png',
        'emperor.png',
        'empress.png',
        'fool.png',
        'hang.png',
        'hermit.png',
        'judgement.png',
        'magician.png',
        'pentacle.png',
        'priestess.png',
        'star.png',
        'strength.png',
        'sun.png',
        'temperance.png',
        'tower.png',
        'world.png'
    ];

    // Mapping relative paths to absolute paths
    const finalCards = cards.map(card => basePath + card);
    // Now 'absolutePaths' contains the absolute URLs to your card images
    console.log(finalCards); // Output for verification or further use

    const gameContainer = document.getElementById('game-container');

    // Function to shuffle an array using Fisher-Yates algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the cards array
    shuffleArray(finalCards);

    // Create and display the cards after shuffling
    finalCards.forEach((cardPath, index) => {
        var newCard = document.createElement('div');
        newCard.classList.add('card');

        var cardBack = document.createElement('img');
        cardBack.src = basePath + 'back.png'; // Path to card back image
        newCard.appendChild(cardBack);

        gameContainer.appendChild(newCard);
        // newCard.addEventListener('click', () => flipCard(newCard, cardPath));
        newCard.addEventListener('click', () => {
            // 모든 카드를 숨깁니다.
            document.querySelectorAll('.card').forEach(card => {
                card.style.display = 'none';
            });

            // 선택된 카드를 화면의 50% 크기로 표시합니다.
            newCard.style.display = 'block';
            newCard.style.position = 'absolute';
            newCard.style.top = '50%';
            newCard.style.left = '50%';
            newCard.style.transform = 'translate(-50%, -50%) scale(2.0)';
            newCard.style.zIndex = '1000';

            // 선택된 카드의 이미지를 변경합니다.
            flipCard(newCard, cardPath);

            // 3초 후에 /chat 페이지로 이동합니다.
            setTimeout(() => {
                window.location.href = '/chat';
            }, 3000);
        });
    });

    function flipCard(cardElement, imagePath) {
        cardElement.innerHTML = ''; // Clear the card
        const cardFront = document.createElement('img');
        cardFront.src = imagePath; // Display the front of the card
        cardElement.appendChild(cardFront);

        // 카드 선택 후 카드 정보 chat_utils.py로 보내기.
        // console.log(imagePath);
        // WebSocket.send(JSON.stringify({"type": "img_path", imagePath: imagePath}));
        fetch('/card-path', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cardPath: imagePath // 카드의 경로 또는 다른 식별 정보
                // client_id: "arcana"
            })
        })

    }

});
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the model from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const selectedModel = urlParams.get('model');

    if (selectedModel) {
        // Store the selected model in sessionStorage
        sessionStorage.setItem('selectedModel', selectedModel);

        // Play the corresponding voice based on the selected model
        switch (selectedModel) {
            case 'iu':
                playVoice('../static/voices/iu_card.mp3');
                break;
            case 'cha':
                playVoice('../static/voices/cha_card.mp3');
                break;
            case 'chunsik':
                playVoice('../static/voices/liam_guruguru.mp3');
                break;
            default:
                console.error('Invalid model selected.');
        }
    } else {
        console.error('No model selected.');
    }
});

function playVoice(voicePath) {
    // Implement your code to play the voice
    const audio = new Audio(voicePath);
    audio.play();
}