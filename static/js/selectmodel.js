document.addEventListener("DOMContentLoaded", function () {
    // Find all elements with class "item"
    const items = document.querySelectorAll('.item');

    // Loop through each "item" element
    items.forEach(function (item) {
        // Add click event listener to each "item"
        item.addEventListener('click', function () {
            // Redirect to the specified URL (e.g., "/firstGame")
            window.location.href = '/firstGame';
        });
    });
});
