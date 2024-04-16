document.addEventListener("DOMContentLoaded", function () {
    // Define the mapping of items to their respective audio files
    const itemAudioMap = {
        'iu': '../static/voices/iu_hi.mp3',
        'cha': '../static/voices/cha_hi.mp3',
        'chunsik': '../static/voices/liam_ogu.mp3'
    };

    // Preload all audio files and store them in an object
    const audioElements = {};
    for (const itemName in itemAudioMap) {
        const audio = new Audio(itemAudioMap[itemName]);
        audioElements[itemName] = audio;
    }

    // Function to play hover sound for a specific item
    function playHoverSound(itemName) {
        const audio = audioElements[itemName];
        audio.currentTime = 0; // Rewind audio to start (in case it's already playing)
        audio.play(); // Play the audio associated with the item
    }

    // Find all elements with class "item"
    const items = document.querySelectorAll('.item');

    // Loop through each "item" element
    items.forEach(function (item) {
        const itemName = item.dataset.item; // Get the item name from data-item attribute

        // Add click event listener to each "item" (existing functionality)
        item.addEventListener('click', function () {
            const model = item.dataset.model;
            sessionStorage.setItem('selectedModel', model);
            window.location.href = `/firstGame?model=${model}`;
        });

        // Add mouseenter event listener to play hover sound for the specific item
        item.addEventListener('mouseenter', function () {
            playHoverSound(itemName);
        });
    });
});
