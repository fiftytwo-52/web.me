<script>
    const cardHeaders = document.querySelectorAll(".bottom_card_header");

    // Loop through each element and add the click event
    cardHeaders.forEach(function(card) {
        card.onclick = function() {
            window.location.href = "maintain.html"; // Redirects to maintain.html
        };
    });
</script>
